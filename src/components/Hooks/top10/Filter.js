import React, { useState } from "react";

const Filter = ({ applyFilters }) => {
    const [selectedFilters, setSelectedFilters] = useState([]);

    const handleCheckboxChange = (filter) => {
        const updatedFilters = selectedFilters.includes(filter)
            ? selectedFilters.filter(item => item !== filter)
            : [...selectedFilters, filter];
        setSelectedFilters(updatedFilters);
    };

    return (
        <div className="filterDropdown">
            <label>
                <input type="checkbox" onChange={() => handleCheckboxChange("Filter 1")} />
                Filter 1
            </label>
            <label>
                <input type="checkbox" onChange={() => handleCheckboxChange("Filter 2")} />
                Filter 2
            </label>
            <button onClick={applyFilters}>Apply</button>
        </div>
    );
};

export default Filter;
