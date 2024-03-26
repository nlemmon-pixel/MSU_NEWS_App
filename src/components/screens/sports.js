import React, { useState, useEffect } from "react";
import { fetchSportsArticles, fetchArticleById } from "../Hooks/top10/modArtFetch"; // Import fetchSportsArticles function
import "../Hooks/top10/Top10Recent.css"; // Import the CSS file

const Sports = () => {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        fetchSportsArticles()
        .then(data => {
            setArticles(data);
        })
        .catch(error => {
            console.error('Error fetching sports articles:', error);
        });
    }, []);

    const handleReadMore = async (articleId) => {
        try {
            const articleData = await fetchArticleById(articleId);
            setSelectedArticle(articleData);
        } catch (error) {
            console.error('Error fetching article data:', error);
        }
    };

    return(
        <div>
            {selectedArticle ? (
                <div className="articleContainer">
                    <h3 className="articleHeading">{selectedArticle.title.rendered}</h3>
                    {selectedArticle._embedded && selectedArticle._embedded["wp:featuredmedia"] && (
                        <img src={selectedArticle._embedded["wp:featuredmedia"][0].source_url} alt={selectedArticle.title.rendered} className="articleImage" />
                    )}
                    <div dangerouslySetInnerHTML={{ __html: selectedArticle.content.rendered }}></div>
                    <button className="backButton" onClick={() => setSelectedArticle(null)}>Back</button>
                </div>
            ) : (
                articles.map((article, index) => (
                    <div key={index} className="articleContainer">
                        <h3 className="articleHeading">{article.title.rendered}</h3>
                        {article._embedded && article._embedded["wp:featuredmedia"] && (
                            <img src={article._embedded["wp:featuredmedia"][0].source_url} alt={article.title.rendered} className="articleImage" />
                        )}
                        <p className="articleExcerpt">{article.excerpt.rendered}</p>
                        <button className="articleLink" onClick={() => handleReadMore(article.id)}>Read More</button>
                        <hr/>
                    </div>
                ))
            )}
        </div>
    );
}

export default Sports;
