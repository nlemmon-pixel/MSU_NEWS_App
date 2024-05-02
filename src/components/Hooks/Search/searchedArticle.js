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

    function handlePhotos(){
        return  <div>
                    <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: articleInfo.title.rendered}}></h3>
                    {articleInfo._embedded && articleInfo._embedded["wp:featuredmedia"] && (
                        <img src={articleInfo._embedded["wp:featuredmedia"][0].source_url} alt={articleInfo.title.rendered} className="articleImage" />
                    )}
                    <div className="articleContent" dangerouslySetInnerHTML={{ __html: articleInfo.content.rendered }}></div>
                    <a href={articleInfo.link}>See Photos</a>
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
                    <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: articleInfo.title.rendered}}></h3>
                    {articleInfo._embedded && articleInfo._embedded["wp:featuredmedia"] && (
                        <img src={articleInfo._embedded["wp:featuredmedia"][0].source_url} alt={articleInfo.title.rendered} className="articleImage" />
                    )}
                    <div className="articleContent" dangerouslySetInnerHTML={{ __html: articleInfo.content.rendered }}></div>
                    <a href={articleInfo.link}>Watch Video</a>
                </div>;
    }
    
    function handleAudio(){
        return  <div>
                    <h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: articleInfo.title.rendered}}></h3>
                    {articleInfo._embedded && articleInfo._embedded["wp:featuredmedia"] && (
                        <img src={articleInfo._embedded["wp:featuredmedia"][0].source_url} alt={articleInfo.title.rendered} className="articleImage" />
                    )}
                    <div className="articleContent" dangerouslySetInnerHTML={{ __html: articleInfo.content.rendered }}></div>
                    <a href={articleInfo.link}>Listen to Audio</a>
                </div>;
    }

    const handleMultimedia = () => {
        if(articleInfo.categories.indexOf(11373) > -1){
            return handlePhotos();
        } else if(articleInfo.categories.indexOf(5122) > -1) {
            return handleVideos();
        } else if(articleInfo.categories.indexOf(11380) > -1){
            return handleAudio();
        }else{
            return <div><h3 className="articleHeading" dangerouslySetInnerHTML={{ __html: articleInfo.title.rendered}}></h3>
                        {articleInfo._embedded && articleInfo._embedded["wp:featuredmedia"] && (
                            <img src={articleInfo._embedded["wp:featuredmedia"][0].source_url} alt={articleInfo.title.rendered} className="articleImage" />
                        )}
                        <div className="articleContent" dangerouslySetInnerHTML={{ __html: articleInfo.content.rendered }}></div>
                    </div>;
        }
    }
    
    const articleDisplay = () =>{
        if(articleInfo !== null && articleInfo !== undefined){
            return(
                <div className='readMore'>
                    <button className="backButton" onClick={() => {setArticleInfo(null); navigate("/")}}>Home</button>
                    {handleMultimedia()}
                    <button className="backButton" onClick={() => {setArticleInfo(null); navigate("/")}}>Home</button>
                    {fixImportedMultimedia()}
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