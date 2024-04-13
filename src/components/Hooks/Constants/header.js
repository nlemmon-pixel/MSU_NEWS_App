import React from 'react';
import SearchBar from '../Search/searchBar';
import './FHstyles.css'; // Import the CSS stylesheet
import NewsLogo from "../../../Images/Logo_Final_white_print.png";

const Header = () => {
    // Function to handle search logic
    const handleSearch = (searchTerm) => {
        // Perform search logic here (if needed)
        console.log('Search term:', searchTerm);
    };

    return(
        <nav id="Header-Content-Container">
            <img src={NewsLogo} alt="The Murray State News" className="headerTitle" width="130px" height="40px"/>
            <div id="SearchBar">
                <SearchBar onSearch={handleSearch}/>
            </div>
        </nav>
    );
}

export default Header;
