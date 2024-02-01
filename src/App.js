// App.js
import React from 'react';
import './App.css'; // Import the CSS file

const App = () => {
    return (
        <div className="App">
            <nav>
                {/*<button onClick={window.location.href='https://google.com'}>Home</button>*/}
                <button onClick={console.log('Button has been Clicked')}>Home</button>
                <a href="#">Politics</a>
                <a href="#">Business</a>
                <a href="#">Technology</a>
                <a href="#">Entertainment</a>
            </nav>
            <header className="App-header">
                <h1>Murray State News</h1>
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
};

export default App;
