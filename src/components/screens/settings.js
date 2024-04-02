// Settings.js
import React from "react";
import { useTheme } from "./ThemeContext";
import "./ThemeStyles.css"; // Import the CSS file for theme styles

const Settings = () => {
    const { isDarkMode, toggleMode } = useTheme();

    const handleToggle = () => {
        toggleMode();
    };

    return (
        <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <header className="App-header">
                <h1>Settings screen</h1>
            </header>
            <main>
                <section>
                    
                </section>
                <section>
                    {/* Toggle switch for theme */}
                    <label>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <input
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={handleToggle}
                    />
                        Dark Mode
                    </label>
                </section>
            </main>
            <footer>
                
            </footer>
        </div>
    );
}

export default Settings;