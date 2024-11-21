// FloatingChatbotIcon.jsx
import React, { useState } from 'react';
import Chatbot from './Chatbot'; // Import the Chatbot component
import "./FloatingChatbotIcon.css"; // Custom styles for animations

const FloatingChatbotIcon = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen((prev) => !prev);
    };

    return (
        <>
            {/* Floating Icon with Animation */}
            <div
                className="floating-icon animate-bounce flex items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 cursor-pointer w-16 h-16"
                onClick={toggleChat}
            >
                <span className="text-4xl">🤖</span> {/* Replace with "Mr. Forky" */}
            </div>

            {/* Chatbot Popup Window */}
            {isChatOpen && (
                <div className="chat-popup fixed bottom-20 right-5 w-80 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-all text-xl"
                        onClick={toggleChat}
                    >
                        &times;
                    </button>
                    <Chatbot />
                </div>
            )}
        </>
    );
};

export default FloatingChatbotIcon;
