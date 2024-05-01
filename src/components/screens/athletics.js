import React from "react";
import {TopArticlesOfCategory} from "../Hooks/DataHandling/ArticleFetcher"; 

const Sports = () => {

    return(
        <div className="App">
            <header className="App-header">
            </header>
            <main>
                <section>
                    <TopArticlesOfCategory CategoryID="3"/>
                </section>
            </main>
            <footer>
                &copy; 2024 The Murray State News
            </footer>
        </div>
    );  
}

export default Sports;
