<<<<<<< Updated upstream:src/components/screens/sports.js
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
=======
import React, { useState, useEffect } from "react";

const Athletics = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                //const response = await fetch("https://murraystatenews.org/wp-json/wp/v2/posts?category_name=athletics");
                const response = await fetch("https://murraystatenews.org/wp-json/wp/v2/posts?categories=3");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArticles(data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Athletics screen</h1>
            </header>
            <main>
                <section>
                    <h2>Breaking News TEST</h2>
                    {articles.map(article => (
                        <div key={article.id}>
                            <h3>{article.title.rendered}</h3>
                            <p>{article.excerpt.rendered}</p>
                            <h1 style={{color:"#0000FF"}}>{article.categories.map(category => (<div>{category} </div>))}</h1>
                        </div>
                    ))}
                </section>
            </main>
            <footer>
                &copy; 2024 Your News App. All rights reserved.
            </footer>
        </div>
    );
}

export default Athletics;
>>>>>>> Stashed changes:src/components/screens/athletics.js
