import React, { useState, useEffect } from "react";
import {Top10Sports} from "../Hooks/top10/ArticleFetcher"; 

const Sports = () => {

    return(
        <div className="App">
            <header className="App-header">
                <h1>The Murray State News</h1>
            </header>
            <main>
                <section>
                    <h2>Breaking News</h2>
                    <hr/>
                    <Top10Sports />
                </section>
            </main>
            <footer>
                &copy; 2024 Your News App. All rights reserved.
            </footer>
        </div>
    );  
}

export default Sports;
