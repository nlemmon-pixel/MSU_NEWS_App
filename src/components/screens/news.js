import React from "react";
import {Top10OfCategory} from "../Hooks/DataHandling/ArticleFetcher.js";

const News = () => {
    return(
       <div className="App">
       <header className="App-header">
           <h1>Breaking News</h1>
       </header>
       <main>
           <Top10OfCategory CategoryID = "3530"/>
       </main>
       <footer>
           &copy; 2024 Your News App. All rights reserved.
       </footer>
   </div>
    );
}

export default News;