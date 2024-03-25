import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../screens/ThemeContext'; // Adjust the import path as necessary
import './FHstyles.css'; // Import the CSS stylesheet

const Footer = () => {
    const navigate = useNavigate();

    const { isDarkMode } = useTheme(); // Access the isDarkMode state from ThemeContext
    
    return (
        <nav id="Footer" className={isDarkMode ? 'dark-mode' : 'light-mode'}> 
            <button className="navButton" onClick={() => navigate('/')}>Home</button>
            <button className="navButton" onClick={() => navigate('/news')}>News</button>
            <button className="navButton" onClick={() => navigate('/settings')}>Settings</button>
            <button className="navButton" onClick={() => navigate('/athletics')}>Athletics</button>
            <button className="navButton" onClick={() => navigate('/help')}>Help</button>
        </nav>
    );
}

export default Footer;
