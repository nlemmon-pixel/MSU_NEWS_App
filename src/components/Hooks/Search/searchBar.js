import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './searchBar.css'; // Import CSS file for styling
import SearchResults from './searchResults'; // Import the SearchResults component
import searchIcon from '../../../icons/SearchIcon.png'; // Import the search icon image
import { useNavigate } from 'react-router-dom';


const PossibleArticles = ({ articles, onClick }) => (
  <div className="possible-articles">
    {articles.map((article) => (
      <div key={article.id} className="article" onClick={() => onClick(article.id)} style={{color:"var(--app_text_color)"}}>
        {article.title.rendered}
      </div>
    ))}
  </div>
);

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [possibleArticles, setPossibleArticles] = useState([]);
  const [error, setError] = useState(null);
  const [isActive, setIsActive] = useState(false); // State to track if the search bar is active
  const searchBarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        // Clicked outside the search bar, reset state
        setSelectedPost(null);
        setPossibleArticles([]);
        setSearchResults([]);
        setSearchTerm('');
        setIsActive(false); // Deactivate the search bar when clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
/*
  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://murraystatenews.org/wp-json/wp/v2/posts?search=${query}`);
      setSearchResults(response.data); // Set the searchResults state with the fetched data
      onSearch(response.data); // Call the onSearch callback with the search results
    } catch (error) {
      setError(error.message);
    }
  };
*/
  const handleChange = async (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    try {
      const response = await axios.get(`https://murraystatenews.org/wp-json/wp/v2/posts?search=${query}`);
      setPossibleArticles(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    //const response = await axios.get(`https://murraystatenews.org/wp-json/wp/v2/posts?search=${searchTerm}`);
    navigate('/search', {state:{searchResults: possibleArticles}});
    //handleSearch(searchTerm);
  };
  
  const handleClick =  (postId) => { 
      setSelectedPost(postId);
      setPossibleArticles([]);
      setSearchTerm('');
      if(postId != null && postId != undefined){
        navigate("/searchedArticle", {state:{articleId: postId}});
      }
  };

  const handleReadMore = async (postId) => {
    try {
      const response = await axios.get(`https://murraystatenews.org/wp-json/wp/v2/posts/${postId}`);
      setSelectedPost(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleSearchBar = () => {
    setIsActive(!isActive); // Toggle the active state of the search bar
  };

  return (
    <div className="search-bar-container" ref={searchBarRef}>
      <div>
        <form onSubmit={handleSubmit} className={`search-bar ${isActive ? 'active' : ''}`}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
            className={`search-input ${isActive ? 'active' : ''}`}
          />
        </form>
          <img src={searchIcon} alt="Search" className="search-icon" onClick={toggleSearchBar}/>
      </div>
      {error && <p className="error-message">Error: {error}</p>}
      {possibleArticles.length > 0 && (
        <PossibleArticles articles={possibleArticles} onClick={handleClick} />
      )}
      
      {/*<SearchResults results={searchResults} handleReadMore={handleReadMore} />*/}
    </div>
  );
};

export default SearchBar;