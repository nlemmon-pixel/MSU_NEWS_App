// Top10Recent.js
import React, { useState, useEffect } from "react";
import "./Top10Recent.css"; // Import the CSS file

const Top10Recent = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://murraystatenews.org/wp-json/wp/v2/posts')
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

    return(
        articles.map((article, index) => {
            return(
                <div key={index} className="articleContainer">
                    <h3 className="articleHeading">{article.title.rendered}</h3>
                    <p className="articleExcerpt">{article.excerpt.rendered}</p>
                    <a className="articleLink" href="">Read More</a> 
                    <hr/>
                </div>
            );
        })
    );
}

export default Top10Recent;
