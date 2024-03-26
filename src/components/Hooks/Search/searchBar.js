import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './searchBar.css'; // Import CSS file for styling

const PossibleArticles = ({ articles, onClick }) => (
  <div className="possible-articles">
    {articles.map((article) => (
      <div key={article.id} className="article" onClick={() => onClick(article.id)}>
        {article.title.rendered}
      </div>
    ))}
  </div>
);

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [possibleArticles, setPossibleArticles] = useState([]);
  const [error, setError] = useState(null);
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
        // Clicked outside the search bar, reset state
        setSelectedPost(null);
        setPossibleArticles([]);
        setSearchResults([]);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`https://murraystatenews.org/wp-json/wp/v2/posts?search=${query}`);
      setSearchResults(response.data);
      onSearch(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchTerm);
  };

  const handleClick = async (postId) => {
    try {
      const response = await axios.get(`https://murraystatenews.org/wp-json/wp/v2/posts/${postId}`);
      setSelectedPost(response.data);
      setPossibleArticles([]);
      setSearchTerm('');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="search-bar-container" ref={searchBarRef}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
        {error && <p className="error-message">Error: {error}</p>}
      </form>
      {possibleArticles.length > 0 && (
        <PossibleArticles articles={possibleArticles} onClick={handleClick} />
      )}
      {selectedPost && (
        <div className="selected-post">
          <h2>{selectedPost.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }} />
        </div>
      )}
      <ul className="search-results">
        {searchResults.map((post) => (
          <li key={post.id} onClick={() => handleClick(post.id)} className="search-result">
            <h3>{post.title.rendered}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
