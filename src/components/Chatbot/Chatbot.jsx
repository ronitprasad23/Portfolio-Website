import React, { useState } from 'react';
import ChatButton from './ChatButton';
import ChatWindow from './ChatWindow';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <>
            <ChatWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <ChatButton isOpen={isOpen} onClick={toggleChat} />
        </>
    );
};

export default Chatbot;
