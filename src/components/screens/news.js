import React from "react";
import {Top10Breaking} from "../Hooks/DataHandling/ArticleFetcher.js";

const News = () => {
    return(
       <div className="App">
       <header className="App-header">
           <h1>News screen</h1>
           <h2>Breaking News</h2>
       </header>
       <main>
           <Top10Breaking />
       </main>
       <footer>
           &copy; 2024 Your News App. All rights reserved.
       </footer>
   </div>
    );
}

export default News;