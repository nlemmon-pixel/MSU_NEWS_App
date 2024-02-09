// App.js
import React, {useState} from 'react';
import './App.css'; // Import the CSS file
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/home';
import News from './components/news';
import Help from './components/help';
import Settings from './components/settings';
import Sports from './components/sports';
import SearchBar from './components/searchBar';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route exact path = "/" element = {<Home />}/>
            <Route exact path = "/help" element = {<Help />}/>
            <Route exact path = "/news" element = {<News />}/>
            <Route exact path = "/settings" element = {<Settings/>}/>
            <Route exact path = "/sports" element = {<Sports />}/>
        </Routes>
      </BrowserRouter>
    );
};

export default App;