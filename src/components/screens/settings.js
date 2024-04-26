// Settings.js
import React from "react";
import DarkMode from "../Hooks/DarkModeHandling/darkMode";
import './settings.css';

const Settings = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Settings screen</h1>
            </header>
            <main>
                <DarkMode />
            </main>
            <footer>
                
            </footer>
        </div>
    );
}

export default Settings;