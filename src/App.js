// App.js
import React from 'react';
import './App.css'; // Import the CSS file
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//import all components
import Home from './components/home';
import News from './components/news';
import Help from './components/help';
import Settings from './components/settings';
import Sports from './components/sports';
import Footer from './components/footer';
import Header from './components/header';


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
