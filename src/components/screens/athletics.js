import React from "react";
import {Top10OfCategory} from "../Hooks/DataHandling/ArticleFetcher"; 

const Sports = () => {

    return(
        <div className="App">
            <header className="App-header">
            </header>
            <main>
                <section>
                    <Top10OfCategory CategoryID="3"/>
                </section>
            </main>
            <footer>
                &copy; 2024 Your News App. All rights reserved.
            </footer>
        </div>
    );  
}

export default Sports;
