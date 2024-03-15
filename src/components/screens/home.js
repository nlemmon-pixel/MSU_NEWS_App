import React from "react";
import Recent from "../Hooks/top10/top10recent";

const Home = () => {

    return(
        <div className="App">
            <header className="App-header">
                <h1>The Murray State News</h1>
            </header>
            <main>
                <section>
                    <h2>Breaking News</h2>
                    <hr/>
                    <Recent/>
                </section>
            </main>
            <footer>
                &copy; 2024 Your News App. All rights reserved.
            </footer>
        </div>
    );
}
export default Home;