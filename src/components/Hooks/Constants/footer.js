import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FHstyles.css'; // Import the CSS stylesheet
import IconTrophy from '../../../icons/whiteTrophies.png'
import IconHome from '../../../icons/whiteHome.png'
import IconNews from '../../../icons/whiteNews.png'
import IconMore from '../../../icons/whiteMores.png'
import IconLifestyle from '../../../icons/whiteFeature.png'

const Footer = () => {
    const navigate = useNavigate();
    
    return (
        <nav id="Footer-Content-Container">
            <div className="navButton" onClick={() => navigate('/athletics')}>
                <img src={IconTrophy} alt="Athletics"/>
                <div className="navButtonTitle">Athletics</div>
            </div> 
            <div className="navButton" onClick={() => navigate('/features')}>
                <img src={IconLifestyle} alt="Features"/>
                <div className="navButtonTitle">Features</div>
            </div> 
            <div className="navButton" onClick={() => navigate('/')}>
                <img src={IconHome} alt="Home"/>
                <div className="navButtonTitle">Home</div>
            </div> 
            <div className="navButton" onClick={() => navigate('/opinion')}>
                <img src={IconNews} alt="Opinion"/>
                <div className="navButtonTitle">Opinion</div>
            </div> 
            <div className="navButton" onClick={() => navigate('/settings')}>
                <img src={IconMore} alt="Settings"/>
                <div className="navButtonTitle">Settings</div>
            </div>
        </nav>
    );
}

export default Footer;
