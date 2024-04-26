import React, { useState } from 'react';
import SearchBar from '../Search/searchBar';
import './FHstyles.css'; // Import the CSS stylesheet
import NewsLogoClosed from "../../../Images/Logo_Final_white_print.png";
import NewsLogoOpen from "../../../icons/ShieldLogo.png"; // Import the open search logo

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false); // State to track if the search bar is open
    const [isLogoTranslated, setIsLogoTranslated] = useState(false); // State to track if the logo is translated

    // Function to handle opening and closing of search bar
    const toggleSearchBar = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsLogoTranslated(!isLogoTranslated); // Toggle the translation of the logo
    };

    return(
        <nav id="Header-Content-Container">
            <img 
                src={isSearchOpen ? NewsLogoOpen : NewsLogoClosed} 
                alt="The Murray State News" 
                className={`headerTitle ${isLogoTranslated ? 'translate-left' : ''}`} 
                width="130px" 
                height="40px"
            />
            <div id="SearchBar" className={isSearchOpen ? 'search-open' : ''}>
                <SearchBar onIconClick={toggleSearchBar} />
            </div>
        </nav>
    );
}

export default Header;
