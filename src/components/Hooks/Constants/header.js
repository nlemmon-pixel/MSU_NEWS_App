import React, { useState, useRef, useEffect } from 'react';
import SearchBar from '../Search/searchBar';
import './FHstyles.css'; // Import the CSS stylesheet
import NewsLogoClosed from "../../../Images/Logo_Final_white_print.png";
import NewsLogoOpen from "../../../icons/ShieldLogo.png"; // Import the open search logo

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false); // State to track if the search bar is open
    const [isLogoTranslated, setIsLogoTranslated] = useState(false); // State to track if the logo is translated
    const searchRef = useRef(null); // Reference to the search bar component

    useEffect(() => {
        // Add event listener to the document to listen for clicks outside the search bar
        document.addEventListener('click', handleClickOutside);

        return () => {
            // Cleanup function to remove event listener
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Function to handle opening and closing of search bar
    const toggleSearchBar = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsLogoTranslated(!isLogoTranslated); // Toggle the translation of the logo
    };

    // Function to handle clicks outside the search bar
    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            // Click occurred outside the search bar, close the search bar and reset header icon
            setIsSearchOpen(false);
            setIsLogoTranslated(false);
        }
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
            <div id="SearchBar" className={isSearchOpen ? 'search-open' : ''} ref={searchRef}>
                <SearchBar onIconClick={toggleSearchBar} />
            </div>
        </nav>
    );
}

export default Header;