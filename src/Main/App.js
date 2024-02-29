// App.js
import React from 'react';// Import the CSS file
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import all components
import Home from '../components/screens/home';
import News from '../components/screens/news';
import Help from '../components/screens/help';
import Settings from '../components/screens/settings';
import Sports from '../components/screens/sports';
import Footer from '../components/Hooks/Constants/footer';
import Header from '../components/Hooks/Constants/header';


const App = () => {
    return (
      <div id="page-container">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route exact path = "/" element = {<Home />}/>
            <Route exact path = "/help" element = {<Help />}/>
            <Route exact path = "/news" element = {<News />}/>
            <Route exact path = "/settings" element = {<Settings/>}/>
            <Route exact path = "/sports" element = {<Sports />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      </div>
    );
};

export default App;
