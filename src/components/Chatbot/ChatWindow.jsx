import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { sendMessageToGemini } from '../../services/gemini';

const ChatWindow = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm Ronit's AI Assistant. Ask me anything about his skills or projects!", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        const userMessage = { id: Date.now(), text: inputText, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputText('');
        setIsLoading(true);

        const botResponseText = await sendMessageToGemini(inputText);

        const botMessage = { id: Date.now() + 1, text: botResponseText, sender: 'bot' };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white dark:bg-dark-base rounded-2xl shadow-2xl border border-gray-100 dark:border-dark-border flex flex-col z-40 overflow-hidden animate-fade-in-up">
            {/* Header */}
            <div className="bg-primary-600 p-4 flex justify-between items-center text-white">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <h3 className="font-semibold tracking-wide">Ronit's Assistant</h3>
                </div>
                <button onClick={onClose} className="hover:bg-primary-700 p-1 rounded transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {/* Messages */}
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50 dark:bg-dark-section">
                {messages.map((msg) => (
                    <ChatMessage key={msg.id} message={msg} />
                ))}
                {isLoading && (
                    <div className="flex w-full mb-4 justify-start">
                        <div className="bg-white dark:bg-dark-card p-3 rounded-2xl rounded-bl-none border border-gray-100 dark:border-dark-border">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white dark:bg-dark-base border-t border-gray-100 dark:border-dark-border">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Ask about Ronit..."
                        className="flex-grow px-4 py-2 rounded-full border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-section text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    />
                    <button
                        type="submit"
                        disabled={!inputText.trim() || isLoading}
                        className="bg-primary-500 hover:bg-primary-600 disabled:opacity-50 text-white p-2 rounded-full transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatWindow;
