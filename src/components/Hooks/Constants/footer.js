import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FHstyles.css'; // Import the CSS stylesheet

const Footer = () => {
    const navigate = useNavigate();
    
    return (
        <nav id="Footer">
            <button className="navButton" onClick={() => navigate('/')}>Home</button>
            <button className="navButton" onClick={() => navigate('/news')}>News</button>
            <button className="navButton" onClick={() => navigate('/settings')}>Settings</button>
            <button className="navButton" onClick={() => navigate('/sports')}>Sports</button>
            <button className="navButton" onClick={() => navigate('/help')}>Help</button>
        </nav>
    );
}

export default Footer;
