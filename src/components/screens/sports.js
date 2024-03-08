import React, { useState, useEffect } from "react";

const Sports = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch("https://murraystatenews.org/wp-json/wp/v2/posts?category_name=athletics");
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
                <h1>Sports screen</h1>
            </header>
            <main>
                <section>
                    <h2>Breaking News</h2>
                    {articles.map(article => (
                        <div key={article.id}>
                            <h3>{article.title.rendered}</h3>
                            <p>{article.excerpt.rendered}</p>
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

export default Sports;