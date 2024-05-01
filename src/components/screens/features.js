import React from "react";
import {TopArticlesOfCategory} from "../Hooks/DataHandling/ArticleFetcher";
import "../Hooks/Constants/FHstyles.css";

const Features = () => {

    return(
        <div className="App">
            <header className="App-header">
            </header >
            <main>
                <section>
                    <TopArticlesOfCategory CategoryID = "5"/>
                </section>
            </main>
            <footer>
                &copy; 2024 The Murray State News
            </footer>
        </div>
    );
}
export default Features;