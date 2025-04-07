import React from "react";
import '../css/SortControl.css'; 

function SortControl  ({ currentSelection, onSortChange })  {
  
  const handleChange = (event) => {
    const newValue = event.target.value; 
    if (onSortChange) {
      onSortChange(newValue); 
    }
  };

  return (
    <div className="sort-control">

      <label htmlFor="sort-select" className="sort-label">
        Sort by
      </label>
      <select
        id="sort-select"
        value={currentSelection} 
        onChange={handleChange} 
        className="sort-select"
      >
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;