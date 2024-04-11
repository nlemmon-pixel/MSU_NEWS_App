import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../components/screens/ThemeContext';
//import "./AppWrapperStyles.css";
import Home from '../components/screens/home';
import News from '../components/screens/news';
import Help from '../components/screens/help';
import Settings from '../components/screens/settings';
import Athletics from '../components/screens/athletics';
import Features from '../components/screens/features';
import Opinion from '../components/screens/opinion';
import Footer from '../components/Hooks/Constants/footer';
import Header from '../components/Hooks/Constants/header';
import SplashScreen from '../components/screens/splash/splashScreen'; // Import the SplashScreen component
import SearchResults from '../components/screens/searchResults';
import FullArticle from '../components/screens/fullArticleViewer';

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
        <ThemeProvider> 
        <div id="page-container" style={{display:"flex", minHeight:"100vh", Width:"100vw", flexDirection:"column"}}>
            {showSplash ? (
                // Render the SplashScreen component if showSplash is true
                <SplashScreen />
            ) : (
                <BrowserRouter>
                    <Header />
                    <div id="main-page-content" style={{flex:"1 1 auto"}}>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/help" element={<Help />} />
                        <Route exact path="/news" element={<News />} />
                        <Route exact path="/settings" element={<Settings />} />
                        <Route exact path="/athletics" element={<Athletics />} />
                        <Route exact path="/Features" element={<Features />} />
                        <Route exact path="/Opinion" element={<Opinion />} />
                        <Route exact path="/search/:query" element={<SearchResults />} />
                        <Route exact path="/article/:id" element={<FullArticle />} />
                    </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            )}
        </div>
        </ThemeProvider>
    );
};

export default App;
