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
                    {/* News articles go here */}
                    <h2>Breaking News</h2>
                    <p>Article 1 summary...</p>
                    <p>Article 2 summary...</p>
                    {/* Add more articles as needed */}
                </section>
                <section>
                    {/* Toggle switch for theme */}
                    <label>
                        Dark Mode
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={handleToggle}
                        />
                    </label>
                </section>
            </main>
            <footer>
                &copy; 2024 Your News App. All rights reserved.
            </footer>
        </div>
    );
}

export default Settings;