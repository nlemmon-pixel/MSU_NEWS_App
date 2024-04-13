import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FHstyles.css'; // Import the CSS stylesheet
import IconTrophy from '../../../icons/whiteTrophies.png'
import IconHome from '../../../icons/whiteHome.png'
import IconNews from '../../../icons/whiteNews.png'
import IconMore from '../../../icons/whiteMores.png'
import IconLifestyle from '../../../icons/whiteLifestyle.png'

const Footer = () => {
    const navigate = useNavigate();
    
    return (
        <nav id="Footer-Content-Container">
            {/*<button className="navButton" onClick={() => navigate('/')}>Home</button>
            <button className="navButton" onClick={() => navigate('/news')}>News</button>
            <button className="navButton" onClick={() => navigate('/settings')}>Settings</button>
            <button className="navButton" onClick={() => navigate('/athletics')}>Athletics</button>
            <button className="navButton" onClick={() => navigate('/help')}>Help</button>*/}

            <button className="navButton" onClick={() => navigate('/athletics')}><img src={IconTrophy} alt="Athletics"/></button> 
            <button className="navButton" onClick={() => navigate('/features')}><img src={IconLifestyle} alt="Features"/></button> 
            <button className="navButton" onClick={() => navigate('/')}><img src={IconHome} alt="Home"/></button> 
            <button className="navButton" onClick={() => navigate('/opinion')}><img src={IconNews} alt="Opinion"/></button> 
            <button className="navButton" onClick={() => navigate('/settings')}><img src={IconMore} alt="Settings"/></button> {/* settings - replace with a dropdown for more, which will contain settings */}
        </nav>
    );
}

export default Footer;
