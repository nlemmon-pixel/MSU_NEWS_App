// ToggleSwitch.js
import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isDarkMode, toggleMode }) => {
    const handleChange = () => {
        console.log("Toggle switch clicked");
        toggleMode(); // Toggle the theme mode
    };

    return (
        <label className={`switch ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <input type="checkbox" checked={isDarkMode} onChange={handleChange} />
            <span className="slider"></span>
        </label>
    );
}

export default ToggleSwitch;
