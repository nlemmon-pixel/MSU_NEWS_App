import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/screens/home';
import News from '../components/screens/news';
import Help from '../components/screens/help';
import Settings from '../components/screens/settings';
import Athletics from '../components/screens/athletics';
import Footer from '../components/Hooks/Constants/footer';
import Header from '../components/Hooks/Constants/header';
import SplashScreen from '../components/screens/splash/splashScreen'; // Import the SplashScreen component

const App = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const splashTimeout = setTimeout(() => {
            setShowSplash(false);
        }, 3000); // 3000 milliseconds = 3 seconds

        // Cleanup function to clear the timeout if the component unmounts before the timeout completes
        return () => clearTimeout(splashTimeout);
    }, []); // Empty dependency array ensures this effect runs only once after initial render

    return (
        <div id="page-container">
            {showSplash ? (
                // Render the SplashScreen component if showSplash is true
                <SplashScreen />
            ) : (
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/help" element={<Help />} />
                        <Route exact path="/news" element={<News />} />
                        <Route exact path="/settings" element={<Settings />} />
                        <Route exact path="/athletics" element={<Athletics />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            )}
        </div>
    );
};

export default App;
