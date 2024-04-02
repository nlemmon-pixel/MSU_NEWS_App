import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './SplashScreen.css'; // Import additional CSS for styling
import TheMurrayStateNewsLogo from './TheMurrayStateNews.png';

const SplashScreen = () => {
    return (
        <div className="splash-screen d-flex justify-content-center align-items-center">
            {/* Use the image with the added "splash-logo" class */}
            <img src={TheMurrayStateNewsLogo} alt="Splash" className="splash-logo" />
        </div>
    );
};

export default SplashScreen;
