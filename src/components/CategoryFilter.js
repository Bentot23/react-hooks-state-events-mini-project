import React from "react";

function CategoryFilter({setCategory, categorySelection, categories}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => {
        return (
          <button 
            className={category === categorySelection ? "selected" : null }
            key={category} 
            onClick={() => setCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
