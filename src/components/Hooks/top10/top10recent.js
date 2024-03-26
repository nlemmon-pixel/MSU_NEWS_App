import React, { useState, useEffect } from "react";
import { fetchArticles, fetchArticleById } from "./modArtFetch"; // Import the fetch functions
import "./Top10Recent.css"; // Import the CSS file
import Filter from "./Filter"; // Import the Filter component

export const Top10Recent = (props) => {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [showFilter, setShowFilter] = useState(false);

    useEffect(() => {
        fetchArticles()
        fetch('https://murraystatenews.org/wp-json/wp/v2/posts?_embed&per_page=10')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setArticles(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
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

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const applyFilters = () => {
        console.log("Apply filters here:", selectedFilters);
        setShowFilter(false);
    };

    return (
        <div>
            <button className="filterButton" onClick={toggleFilter}>Filter</button>
            {showFilter && <Filter applyFilters={applyFilters} />}
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
                        <hr />
                    </div>
                ))
            )}
        </div>

            );
        }) 

    );
};

export default Top10Recent;
