import React from "react";
import {TopArticlesOfCategory} from "../Hooks/DataHandling/ArticleFetcher";
import "../Hooks/Constants/FHstyles.css";

const Home = () => {

    return(
        <div className="App">
            <header className="App-header">
            </header >
            <main>
                <section>
                    <TopArticlesOfCategory CategoryID = "" numArticles="20"/>
                </section>
            </main>
            <footer className="copyright">
                &copy; 2024 The Murray State News
            </footer>
        </div>
    );
}
export default Home;