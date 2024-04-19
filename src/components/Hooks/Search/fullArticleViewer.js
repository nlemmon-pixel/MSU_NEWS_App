import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchArticleById } from '../DataHandling/ArticleFetcher.js'; // Import the fetchArticleById function

const FullArticle = () => {
  const { id } = useParams(); // Get the article ID from the URL params
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleData = await fetchArticleById(id);
        setArticle(articleData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchArticle();

    // Clean-up function to clear state on unmount
    return () => {
      setArticle(null);
      setError(null);
    };
  }, [id]); // Re-fetch article when the ID changes

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h2>{article.title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
    </div>
  );
}


export default FullArticle;