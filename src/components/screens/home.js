import React from "react";
//import Recent from "../Hooks/top10/top10recent";
<<<<<<< Updated upstream
import {Top10Recent} from "../Hooks/top10/ArticleFetcher";
=======
import {Top10Recent} from "../Hooks/top10/top10recent";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
                    <Top10Recent />
                    {/*<Recent/>*/}
=======
                    <Top10Recent/>
>>>>>>> Stashed changes
                </section>
            </main>
            <footer>
                &copy; 2024 Your News App. All rights reserved.
            </footer>
        </div>
    );
}
export default Home;