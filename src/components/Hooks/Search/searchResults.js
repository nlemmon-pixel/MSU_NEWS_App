import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import "../DataHandling/ArticleFetcherStyles.css";

const SearchResults = () => {
  const [articleInfo, setArticleInfo] = useState(null);
  const navigate = useNavigate(); 
  const location = useLocation();
  const passedArticles = location?.state;

  useEffect(()=>{
    if(passedArticles !== undefined && passedArticles !== null){
      setArticleInfo(passedArticles.searchResults);
    }
  }, [!location.pathname, location?.state?.searchResults])

  const handleReadMore = (id) => {
    navigate("/searchedArticle", {state:{articleId: id}});
  }

  const articlesDisplay = () => {
    if(articleInfo !== null && articleInfo !== undefined && articleInfo.length > 0){
      var displayedContent = articleInfo.map((article)=>{
        return(
          <div key={article.id} className="preView">
            <h3 className="articleHeading" dangerouslySetInnerHTML={{__html: article.title.rendered}}></h3>

            <button className="articleLink" onClick={() => handleReadMore(article.id)}>Read More</button>
          </div>
        );
      })
    return(displayedContent);
    } else {
      return (<div>No Search Results</div>);
    }
  }
  return(
    <div id="searched-article-container">
      {articlesDisplay()}
    </div>
  );
}

export default SearchResults;