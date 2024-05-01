import React from "react";
import {TopArticlesOfCategory} from "../Hooks/DataHandling/ArticleFetcher"; 

const Opinion = () => {

    return(
        <div className="App">
            <header className="App-header">
            </header>
            <main>
                <section>
                    <TopArticlesOfCategory CategoryID="6"/>
                </section>
            </main>
            <footer>
                &copy; 2024 The Murray State News
            </footer>
        </div>
    );  
}

export default Opinion;
