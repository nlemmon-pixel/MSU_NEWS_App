// Settings.js
import React from "react";
import DarkMode from "../Hooks/DarkModeHandling/darkMode";
import './settings.css';

const Settings = () => {
    return (
        <div className="App settings">
            <header className="App-header">
                <h1>Setting</h1>
            </header>
            <main>
                <div className="settings-menu-container">
                    <div className="settings-object">
                        <DarkMode />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Settings;