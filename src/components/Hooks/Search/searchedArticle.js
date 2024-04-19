import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {fetchArticleById} from '../DataHandling/ArticleFetcher';
import '../DataHandling/ArticleFetcherStyles.css';

const SearchedArticle = () => {
    const [articleInfo, setArticleInfo] = useState(null);
    const navigate = useNavigate(); 
    const location = useLocation();
    const passedId = location?.state;

    useEffect(()=>{
        if(passedId !== undefined && passedId !== null){
            fetchArticleById(passedId.articleId).then(result => setArticleInfo(result));
        }
    }, [!location.pathname, location?.state?.articleId])
    
    const articleDisplay = () =>{
        if(articleInfo !== null && articleInfo !== undefined){
            return(
                <div>
                    <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: articleInfo.title.rendered }}></h3>
                    {articleInfo._embedded && articleInfo._embedded["wp:featuredmedia"] && (
                        <img src={articleInfo._embedded["wp:featuredmedia"][0].source_url} alt={articleInfo.title.rendered} className="articleImage" />
                    )}
                    <div className="articleContent" dangerouslySetInnerHTML={{ __html: articleInfo.content.rendered }}></div>
                    <button className="backButton" onClick={() => {setArticleInfo(null); navigate("/")}}>Home</button>
                </div>
            );
        } else {
            return <div></div>;
        }
    };

    return(
        <div id="searched-article-container" className="articleContainer">
            {articleDisplay()}
        </div>
    );
}

export default SearchedArticle;