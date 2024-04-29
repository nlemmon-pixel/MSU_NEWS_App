import React, { useState, useEffect } from "react";
import "./ArticleFetcherStyles.css"; // Import the CSS file

//helper functions
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

function getAd (index) {
    if(index%5 === 0 && index !== 0){
        return (<div className="adSpace"> <h1>This is an Ad.</h1> </div>) //placeholder
    }
}

//TODO: implement these functions to handle things like photo galleries and videos
function handlePhotos(){

}

function handleVideos(){

}

function handleAudio(){

}

export function handleMultimedia(passedMedia){
    if(false){
        handlePhotos();
    } else if(false) {
        handleVideos();
    } else if(false){
        handleAudio();
    }else{
        return passedMedia;
    }
}

//Directly imported by components on the screens
export const Top10OfCategory = (props) => 
{
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        fetchArticles()
        var URI_to_fetch;
        if(props.CategoryID !== ""){
            URI_to_fetch = `https://murraystatenews.org/wp-json/wp/v2/posts?_embed&per_page=10&categories=${props.CategoryID}`;
        } else {
            URI_to_fetch = "https://murraystatenews.org/wp-json/wp/v2/posts?_embed&per_page=10";
        }

        fetch(URI_to_fetch)
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
    }, [props.CategoryID]);

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
                <div className="readMore">
                    <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: selectedArticle.title.rendered}}></h3>
                    {selectedArticle._embedded && selectedArticle._embedded["wp:featuredmedia"] && (
                        <img src={selectedArticle._embedded["wp:featuredmedia"][0].source_url} alt={selectedArticle.title.rendered} className="articleImage" />
                    )}
                    <div className="articleContent" dangerouslySetInnerHTML={{ __html: selectedArticle.content.rendered }}></div>
                    <button className="backButton" onClick={() => setSelectedArticle(null)}>Back</button>
                </div>

            ) : (
                articles.map((article, index) => (
                <div>
                    <div>{getAd(index)}</div>
                        <div key={index} className={`preView ${index===0 ? "firstPreView" : ""}`}>
                            {article._embedded && article._embedded["wp:featuredmedia"] && (
                                <img src={article._embedded["wp:featuredmedia"][0].source_url} alt={article.title.rendered} className="articleImage" />
                            )}
                            <div className="preViewInfo">
                                <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: article.title.rendered }}/>
                                <button className="articleLink" onClick={() => handleReadMore(article.id)}>Read More</button>
                            </div>
                            <hr/>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

