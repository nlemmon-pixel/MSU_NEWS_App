import React from "react";

const Home = () => {
    const recent = () => {
        fetch('https://murraystatenews.org/wp-json/wp/v2/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Do something with the fetched data
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }

    return(
        <div className="App">
            <header className="App-header">
                <h1>Murray State News</h1>
            </header>
            <main>
                <button onClick={recent}>Fetch Data</button>
                <section>
                    {/* News articles go here */}
                    <h2>Breaking News</h2>
                    <p>Article 1 summary...</p>
                    <p>Article 2 summary...</p>
                    {/* Add more articles as needed */}
                </section>
            </main>
            <footer>
                &copy; 2024 Your News App. All rights reserved.
            </footer>
        </div>
    );
}
export default Home;