import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './SplashScreen.css'; // Import additional CSS for styling
import MurrayStateLogo from './MurrayStateLogo.png'

const SplashScreen = () => {
    return (
        <div className="splash-screen d-flex justify-content-center align-items-center">
            {/* Use Bootstrap spinner and the imported image */}
            <div className="spinner-border text-primary" role="status">
                <img src={MurrayStateLogo} alt="Splash" style={{ margin: 'auto' }}/>
            </div>
        </div>
    );
};



export default SplashScreen;