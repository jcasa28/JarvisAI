import React, { useState } from 'react';
import './App.css';
import './Header';

function App() {
    const [prompt, setPrompt] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Add user's message to chat
        setMessages(prev => [...prev, { content: prompt, sender: 'user' }]);

        try {
            const res = await fetch('http://127.0.0.1:5000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });
            const data = await res.json();

            // Add Jarvis's response to chat
            setMessages(prev => [...prev, { content: data.response, sender: 'jarvis' }]);
            setPrompt(''); // Clear the input
        } catch (error) {
            console.error("Error fetching data:", error);
            setMessages(prev => [...prev, { content: "An error occurred while fetching the response.", sender: 'jarvis' }]);
        }
    };

    return (

      <div>
        <h1>Jarvis</h1>
        <div className="chat-container">
            
            <div className="chat-bubble">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        <p>{msg.content}</p>
                    </div>
                ))}
            </div>
          
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Type your prompt"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
      </div>
    );
}

export default App;
