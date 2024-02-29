import {useState, useEffect} from "react";

const Top10Recent = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('https://murraystatenews.org/wp-json/wp/v2/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            //console.log(data);          
            setArticles(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }, []);

    return(
        articles.map((article, index) => {
            const formatContent = () => {
                /*bring content in here, instead of directly in the html below, 
                then remove things lik <p> tags before displaying
                
                also remove things like '&#8217;', which is a character code for an apostrophe
                (this is reffered to as an 'HTML Character Entity')*/ 
            }

            return(
                <div key={index} className="articleContainer">
                    <h3>{article.title.rendered}</h3>
                    <p>{article.excerpt.rendered}</p>
                    <a href="">Read More</a> 
                    <hr/>
                </div>
            );
        })
    );
}

export default Top10Recent;