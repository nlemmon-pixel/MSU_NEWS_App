import React, { useState, useEffect } from "react";
import "./Top10Recent.css"; // Import the CSS file

export const Top10Recent = (props) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
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

    return(
        articles.map((article, index) => {
            const imageUrl = article._embedded && article._embedded['wp:featuredmedia'] 
                ? article._embedded['wp:featuredmedia'][0].source_url 
                : ''; // Extract image URL if available

            return(
                <div key={index} className="articleContainer">
                    <h3 className="articleHeading">{article.title.rendered}</h3>
                    {imageUrl && <img src={imageUrl} alt={article.title.rendered} className="articleImage" />}
                    <div dangerouslySetInnerHTML={{ __html: article.excerpt.rendered }} />
                    <a className="articleLink" href={article.link}>Read More</a> 
                    <hr/>
                </div>
            );
        }) 
    );
}

export default Top10Recent;
