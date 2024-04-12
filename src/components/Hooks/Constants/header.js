import React from 'react';
import SearchBar from '../Search/searchBar';
import './FHstyles.css'; // Import the CSS stylesheet
import NewsLogo from '../../../Images/TheMurrayStateNews.png';

const Header = () => {
    // Function to handle search logic
    const handleSearch = (searchTerm) => {
        // Perform search logic here (if needed)
        console.log('Search term:', searchTerm);
    };

    return(
        <nav id="Header">
            {/*<img src={NewsLogo} alt="The Murray State News"/>*/}
            <p className="headerTitle">The Murray State News</p>
            <SearchBar id="SearchBar" onSearch={handleSearch}/>
        </nav>
    );
}

export default Header;
