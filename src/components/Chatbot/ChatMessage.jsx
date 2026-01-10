import React from 'react';

const ChatMessage = ({ message }) => {
    const isUser = message.sender === 'user';

    return (
        <div className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${isUser
                        ? 'bg-primary-500 text-white rounded-br-none'
                        : 'bg-white dark:bg-dark-card text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-100 dark:border-dark-border'
                    }`}
            >
                {message.text}
            </div>
        </div>
    );
};

export default ChatMessage;
