import React, { useState, useEffect } from "react";
import "./ArticleFetcherStyles.css"; // Import the CSS file

export async function fetchArticles(category = '') {
    try {
        const response = await fetch(`https://murraystatenews.org/wp-json/wp/v2/posts?${category}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
}


export async function fetchArticleById(articleId) {
    try {
        const response = await fetch(`https://murraystatenews.org/wp-json/wp/v2/posts/${articleId}?_embed`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching article:', error);
        throw error;
    }
}

export async function fetchSportsArticles() {
    try {
        const response = await fetch('https://murraystatenews.org/wp-json/wp/v2/posts?category_name=athletics&_embed');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching sports articles:', error);
        throw error;
    }
}

const getAd = (index) => {
    if(index%5 == 0 && index !=0){
        return (<div className="adSpace"> <h1>This is an Ad.</h1> </div>)
    }
}

//Directly imported by components on the screens
export const Top10Recent = (props) => {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    
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
                    <div>
                        <div>{getAd(index)}</div>
                        <div key={index} className="articleContainer">
                            <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: article.title.rendered }}/>
                            {article._embedded && article._embedded["wp:featuredmedia"] && (
                                <img src={article._embedded["wp:featuredmedia"][0].source_url} alt={article.title.rendered} className="articleImage" />
                            )}
                            <p className="articleExcerpt" dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
                            <button className="articleLink" onClick={() => handleReadMore(article.id)}>Read More</button>
                            <hr/>
                        </div>
                    </div>
                ))
            )}
        </div>

    );
}


export const Top10Sports = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch("https://murraystatenews.org/wp-json/wp/v2/posts?categories=3&_embed");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArticles(data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        articles.map((article, index) => (
            <div>
                <div>{getAd(index)}</div>
                <div key={article.id} className="articleContainer">
                    <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: article.title.rendered }} />
                    {article._embedded && article._embedded['wp:featuredmedia'] && (
                        <img
                            src={article._embedded['wp:featuredmedia'][0].source_url}
                            alt={article._embedded['wp:featuredmedia'][0].alt_text}
                            className="articleImage"
                        />
                    )}
                    <p className="articleExcerpt" dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
                </div>
            </div>
        ))
    );
}


export const Top10Breaking = (props) => {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    
    useEffect(() => {
        fetchArticles()
        fetch('https://murraystatenews.org/wp-json/wp/v2/posts?_embed&per_page=10&categories=3530')
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
                    <div>
                        <div>{getAd(index)}</div>
                        <div key={index} className="articleContainer">
                            <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: article.title.rendered }}/>
                            {article._embedded && article._embedded["wp:featuredmedia"] && (
                                <img src={article._embedded["wp:featuredmedia"][0].source_url} alt={article.title.rendered} className="articleImage" />
                            )}
                            <p className="articleExcerpt" dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
                            <button className="articleLink" onClick={() => handleReadMore(article.id)}>Read More</button>
                            <hr/>
                        </div>
                    </div>
                ))
            )}
        </div>

    );
}