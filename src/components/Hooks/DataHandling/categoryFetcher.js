import React, { useState, useEffect } from "react";

const categoriesToDisplay = ["Athletics", "News", "Features"];

export const DisplayCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://murraystatenews.org/wp-json/wp/v2/categories?per_page=100");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchCategories();
    }, []);

    function updateCategoryFilter(categoryID){
        //nothing here yet
        console.log("category filter updated: " + categoryID);
    }

    return (
        <div className = "CategoryFilteringButtons">
            {categories.map(category => {
                if(categoriesToDisplay.indexOf(category.name.trim()) > -1){ //the current category (in the iteration) is one that we want to display: listed in categoriesToDisplay
                    return(<button className="CategorySelectionButton" key={category.id} onClick={() => updateCategoryFilter(category.id)}>{category.name}</button>)
                }
            })}
            
            {/*
            {categories.map(category => (
                <button className="CategorySelectionButton" key={category.id}>{category.name}</button>
            ))}
            */}
        </div>
    );
}