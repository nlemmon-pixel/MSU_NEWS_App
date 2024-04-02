import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { fetchArticleById } from '../Hooks/DataHandling/ArticleFetcher.js';

const SearchResults = ({ results }) => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [error, setError] = useState(null);

  const handleReadMore = async (articleId) => {
    try {
      const articleData = await fetchArticleById(articleId);
      setSelectedPost(articleData);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {results.map((result) => (
        <div key={result.id} className="articleContainer">
          <h3 className="articleHeading">{result.title.rendered}</h3>
          <p className="articleExcerpt" dangerouslySetInnerHTML={{ __html: result.excerpt.rendered }} />
          {/* Use Link component to navigate to full article */}
          <Link to={`/article/${result.id}`} className="articleLink">Read More</Link>
          <hr />
        </div>
      ))}
      {selectedPost && (
        <div className="selected-post">
          <h2>{selectedPost.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: selectedPost.content.rendered }} />
        </div>
      )}
      {error && <p className="error-message">Error: {error}</p>}
    </div>
  );
};

export default SearchResults;
