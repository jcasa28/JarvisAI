// src/components/ChatBubble.js

import React from 'react';

const ChatBubble = ({ content, sender }) => {
    return (
        <div className={`message ${sender}`}>
            <p>{content}</p>
        </div>
    );
};

export default ChatBubble;