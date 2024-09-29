// src/App.js

import React from 'react';
import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';

function App() {
    return (
        <div>
            <Header />
            <Chat />
        </div>
    );
}

export default App;