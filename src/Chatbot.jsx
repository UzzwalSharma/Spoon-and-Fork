import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress'; // Material UI spinner
import sendChatMessage from '../geminiChat'; // Adjust path if necessary

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // To toggle popup visibility

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    setInput(''); // Clear input after sending
    setLoading(true); // Start loading

    // Get response from Gemini API
    const response = await sendChatMessage(input);
    const botMessage = { text: response, sender: 'bot' };

    setMessages((prev) => [...prev, botMessage]);
    setLoading(false); // Stop loading
  };

  const handleClose = () => {
    setIsVisible(false); // Trigger animation by setting visibility to false
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      } w-80 bg-white shadow-lg rounded-lg overflow-hidden`}
    >
      {/* Header */}
      <div className="bg-green-600 text-white px-4 py-3 flex justify-between items-center">
        <h3 className="font-bold text-lg">Mr. Forky 🤖</h3>
        <button
          onClick={handleClose}
          className="bg-green-500 hover:bg-green-400 text-white text-sm px-2 py-1 rounded-full transition-all duration-300"
        >
          &times;
        </button>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 h-64 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs ${
              message.sender === 'user'
                ? 'bg-green-100 text-green-800 self-end ml-auto'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {message.text}
          </div>
        ))}

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center mt-3">
            <CircularProgress size={25} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="flex items-center p-3 border-t">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type a message... 💬"
          className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r-lg transition duration-300"
        >
          ➡️
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
