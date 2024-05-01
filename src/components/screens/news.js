import React from "react";
import {TopArticlesOfCategory} from "../Hooks/DataHandling/ArticleFetcher.js";

const News = () => {
    return(
       <div className="App">
       <header className="App-header">
           <h1>Breaking News</h1>
       </header>
       <main>
           <TopArticlesOfCategory CategoryID = "3530"/>
       </main>
       <footer>
           &copy; 2024 The Murray State News
       </footer>
   </div>
    );
}

export default News;