import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./searchBar";

const Home = () => {
    const navigate = useNavigate();

    // Function to handle search logic
    const handleSearch = (searchTerm) => {
        // Perform search logic here (if needed)
        console.log("Search term:", searchTerm);
    };

    return(
        <div className="App">
            <nav>
                <button className="navButton">Home</button>
                <button className="navButton" onClick={() => navigate('/news')}>News</button>
                <button className="navButton" onClick={() => navigate('/settings')}>Settings</button>
                <button className="navButton" onClick={() => navigate('/sports')}>Sports</button>
                <button className="navButton" onClick={() => navigate('/help')}>Help</button>
            </nav>
            <header className="App-header">
                <h1>Murray State News</h1>
                {/* Render the SearchBar component and pass handleSearch as a prop */}
                <SearchBar onSearch={handleSearch} />
            </header>
            <main>
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
