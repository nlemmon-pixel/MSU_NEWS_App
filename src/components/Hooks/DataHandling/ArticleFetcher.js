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
        /* 
        //set adCategoryID to a static number 
        //(view 'https://murraystatenews.org/wp-json/wp/v2/categories?per_page=100&page=1' 
        //in a json editor to find the id, once ads are uploaded)
        const adCategoryID; 
        var randomAdNumber = Math.random(3)+1; //change the random parameter (3) to be the number of ads there are in the database (the +1 is necessary for future steps)

        fetch('https://murraystatenews.org/wp-json/wp/v2/posts?&&categories=${adCategoryID}&&per_page=1&&page=${randomAdNumber}')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return //the needed ad data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        */
    }
}


//Directly imported by components on the screens
export const TopArticlesOfCategory = (props) => 
{
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        fetchArticles()
        var URI_to_fetch;
        var numArticlesToFetch;
        
        if(props.numArticles !== undefined && props.numArticles !== ""){
            numArticlesToFetch = props.numArticles;
        } else {
            numArticlesToFetch = 10;
        }

        if(props.CategoryID !== undefined && props.CategoryID !== ""){
            URI_to_fetch = `https://murraystatenews.org/wp-json/wp/v2/posts?_embed&per_page=${numArticlesToFetch}&categories=${props.CategoryID}&page=1`;
        } else {
            URI_to_fetch = `https://murraystatenews.org/wp-json/wp/v2/posts?_embed&per_page=${numArticlesToFetch}&page=1`;
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
    
    function handlePhotos(){
        return  <div>
                    <button className="backButton" onClick={() => setSelectedArticle(null)}>Back</button>
                    <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: selectedArticle.title.rendered}}></h3>
                    {selectedArticle._embedded && selectedArticle._embedded["wp:featuredmedia"] && (
                        <img src={selectedArticle._embedded["wp:featuredmedia"][0].source_url} alt={selectedArticle.title.rendered} className="articleImage" />
                    )}
                    <div className="articleContent" dangerouslySetInnerHTML={{ __html: selectedArticle.content.rendered }}></div>
                    <a href={selectedArticle.link}>See Photos</a>
                    <button className="backButton" onClick={() => setSelectedArticle(null)}>Back</button>
                </div>;
    }
    const fixImportedMultimedia = () => {
        setTimeout(()=>{
            let links = document.getElementsByClassName("modal-photo");
            for(var i=0; i<links.length; i++){
                links[i].removeAttribute("href");
            }

            document.getElementById("storypageslideshow")?.removeAttribute("style");

            let embededVideos = document.querySelectorAll("iframe");
            for(var j=0; j<embededVideos.length; j++){
                embededVideos[j].remove();
            }
        }, 25)
    }
    
    function handleVideos(){
        return  <div>
                    <button className="backButton" onClick={() => setSelectedArticle(null)}>Back</button>
                    <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: selectedArticle.title.rendered}}></h3>
                    {selectedArticle._embedded && selectedArticle._embedded["wp:featuredmedia"] && (
                        <img src={selectedArticle._embedded["wp:featuredmedia"][0].source_url} alt={selectedArticle.title.rendered} className="articleImage" />
                    )}
                    <div className="articleContent" dangerouslySetInnerHTML={{ __html: selectedArticle.content.rendered }}></div>
                    <a href={selectedArticle.link}>Watch Video</a>
                    <button className="backButton" onClick={() => setSelectedArticle(null)}>Back</button>
                </div>;
    }
    
    function handleAudio(){
        return  <div>
                    <button className="backButton" onClick={() => setSelectedArticle(null)}>Back</button>
                    <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: selectedArticle.title.rendered}}></h3>
                    {selectedArticle._embedded && selectedArticle._embedded["wp:featuredmedia"] && (
                        <img src={selectedArticle._embedded["wp:featuredmedia"][0].source_url} alt={selectedArticle.title.rendered} className="articleImage" />
                    )}
                    <div className="articleContent" dangerouslySetInnerHTML={{ __html: selectedArticle.content.rendered }}></div>
                    <a href={selectedArticle.link}>Listen to Audio</a>
                    <button className="backButton" onClick={() => setSelectedArticle(null)}>Back</button>
                </div>;
    }

    const handleMultimedia = () => {
        if(selectedArticle.categories.indexOf(11373) > -1){
            return handlePhotos();
        } else if(selectedArticle.categories.indexOf(5122) > -1) {
            return handleVideos();
        } else if(selectedArticle.categories.indexOf(11380) > -1){
            return handleAudio();
        }else{
            return <div>
                    <button className="backButton" onClick={() => setSelectedArticle(null)}>Back</button>
                    <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: selectedArticle.title.rendered}}></h3>
                    {selectedArticle._embedded && selectedArticle._embedded["wp:featuredmedia"] && (
                        <img src={selectedArticle._embedded["wp:featuredmedia"][0].source_url} alt={selectedArticle.title.rendered} className="articleImage" />
                    )}
                    <div className="articleContent" dangerouslySetInnerHTML={{ __html: selectedArticle.content.rendered }}></div>
                    <button className="backButton" onClick={() => setSelectedArticle(null)}>Back</button></div>;
        }
    }

    return(
        <div>
            {selectedArticle ? (
                <div className="readMore">
                    {handleMultimedia()}
                </div>

            ) : (
                articles.map((article, index) => (
                <div>
                    <div>{getAd(index)}</div>
                        <div key={index} className={`${index%5===0 
                            && !(article.categories.indexOf(11373) > -1) 
                            && !(article.categories.indexOf(5122) > -1) 
                            && !(article.categories.indexOf(11380) > -1) 
                            ? "firstPreView" : "preView"}`}>

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
            {fixImportedMultimedia()}
        </div>
    );
}

