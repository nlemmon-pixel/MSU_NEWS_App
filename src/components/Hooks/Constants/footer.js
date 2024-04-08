import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FHstyles.css'; // Import the CSS stylesheet

const Footer = () => {
    const navigate = useNavigate();
    
    return (
        <nav id="Footer">
            {/*<button className="navButton" onClick={() => navigate('/')}>Home</button>
            <button className="navButton" onClick={() => navigate('/news')}>News</button>
            <button className="navButton" onClick={() => navigate('/settings')}>Settings</button>
            <button className="navButton" onClick={() => navigate('/athletics')}>Athletics</button>
            <button className="navButton" onClick={() => navigate('/help')}>Help</button>*/}

            <button className="navButton" onClick={() => navigate('/athletics')}><img src="" alt="Athletics"/></button> 
            <button className="navButton" onClick={() => navigate('/features')}><img src="" alt="Features"/></button> 
            <button className="navButton" onClick={() => navigate('/')}><img src="" alt="Home"/></button> 
            <button className="navButton" onClick={() => navigate('/opinion')}><img src="" alt="Opinion"/></button> 
            <button className="navButton" onClick={() => navigate('/settings')}><img src="" alt="Settings"/></button> {/* settings - replace with a dropdown for more, which will contain settings */}
        </nav>
    );
}

export default Footer;
