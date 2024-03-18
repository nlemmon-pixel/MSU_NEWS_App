import React from "react";

const Help = () => {
    return(
       <div className="App">
       <header className="App-header">
           <h1>Help Screen</h1>
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

export default Help;