import React, { useState, useEffect } from "react";

const categoriesToDisplay = [4, 3, 5, 6];
/*  
    3 = Athletics   
    4 = news
    5 = Features
    6 = Opinion
*/
let urlCategories = [];

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
        if(urlCategories.indexOf(categoryID) > -1){
            const indexOfCat = urlCategories.indexOf(categoryID);
            delete urlCategories[indexOfCat];
        } else {
            urlCategories.push(categoryID);
        }
        console.log(urlCategories);
    }

    return (
        <div className = "CategoryFilteringButtons">
            {categories.map(category => {
                if(categoriesToDisplay.indexOf(category.id) > -1){ //the current category (in the iteration) is one that we want to display: listed in categoriesToDisplay
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

export function getFilters(){
    return urlCategories;
}
export function getFiltersUriExtension(){
    urlCategories = categoriesToDisplay;
    let extension = "";
    urlCategories.forEach((value, index)=> {
        if(index == 0){
            extension += "&categories=";
        }
        if(value != null){
            if(index < urlCategories.length-1){
                extension += value + ",";
            } else {
                extension += value;
            }
        }       
    });
    
    return extension;
}