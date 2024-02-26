import React from 'react';
import SearchBar from "./searchBar";

const Footer = () =>{
    // Function to handle search logic
    const handleSearch = (searchTerm) => {
        // Perform search logic here (if needed)
        console.log("Search term:", searchTerm);
    };
    return(
        <nav id="Header">
            <p style={{display:'inline'}}>MSU News</p>
            <SearchBar id="SearchBar" onSearch={handleSearch}/>
        </nav>
    );
}

export default Footer;