import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress"; // Material UI spinner
import sendChatMessage from "../geminiChat"; // Adjust path if necessary

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // To toggle popup visibility
  const [listening, setListening] = useState(false); // For microphone status

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = SpeechRecognition ? new SpeechRecognition() : null;

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    setInput(""); // Clear input after sending
    setLoading(true); // Start loading

    // Get response from Gemini API
    const response = await sendChatMessage(input);
    const botMessage = { text: response, sender: "bot" };

    setMessages((prev) => [...prev, botMessage]);
    setLoading(false); // Stop loading
  };

  const handleClose = () => {
    setIsVisible(false); // Trigger animation by setting visibility to false
  };

  const handleVoiceInput = () => {
    if (!recognition) {
      alert("Voice recognition not supported in this browser.");
      return;
    }

    if (listening) {
      recognition.stop();
      setListening(false);
      return;
    }

    setListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      const voiceText = event.results[0][0].transcript;
      setInput(voiceText); // Update input field with recognized text
      setListening(false);
    };

    recognition.onerror = () => {
      alert("Error recognizing voice. Please try again.");
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false); // Ensure listening state is reset
    };
  };

  const handleReadAloud = (text) => {
    if (!window.speechSynthesis) {
      alert("Text-to-speech not supported in this browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
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
            className={`flex items-center ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-3 rounded-lg max-w-xs ${
                message.sender === "user"
                  ? "bg-green-100 text-green-800 self-end ml-auto"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </div>
            {message.sender === "bot" && (
              <button
                onClick={() => handleReadAloud(message.text)}
                className="ml-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
              >
                🔊
              </button>
            )}
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
      <div className="flex flex-col items-center p-3 border-t">
        <div className="relative">
          {/* Mic Button */}
          <button
            onClick={handleVoiceInput}
            className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 ${
              listening
                ? "bg-red-500 shadow-lg"
                : "bg-gray-100 shadow-md hover:shadow-lg"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-6 h-6 ${
                listening ? "text-red-600" : "text-gray-800"
              }`}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3s-3 1.34-3 3v6c0 1.66 1.34 3 3 3zm4.25-3c0 2.485-2.015 4.5-4.25 4.5S7.75 14.485 7.75 12H6.25c0 3.018 2.272 5.451 5 5.917V21h2v-3.083c2.728-.466 5-2.899 5-5.917h-1.5z" />
            </svg>
          </button>
          {/* Ripple Effect */}
          {listening && (
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-red-500 opacity-30 animate-ping"></div>
          )}
        </div>

        {/* Input and Send Button */}
        <div className="flex items-center w-full mt-3">
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
    </div>
  );
};

export default Chatbot;
