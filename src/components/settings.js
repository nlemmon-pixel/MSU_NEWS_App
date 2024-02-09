import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const navigate = useNavigate();
    return(
       <div className="App">
       <nav>
           <button className="navButton" onClick={() => navigate('/')}>Home</button>
           <button className="navButton" onClick={() => navigate('/News')}>News</button>
           <button className="navButton">Settings</button>
           <button className="navButton" onClick={() => navigate('/sports')}>Sports</button>
           <button className="navButton" onClick={() => navigate('/help')}>Help</button>
       </nav>
       <header className="App-header">
           <h1>Settings screen</h1>
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

export default Settings;