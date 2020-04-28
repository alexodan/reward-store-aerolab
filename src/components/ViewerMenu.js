import React from 'react';
import './ViewerMenu.css';

const ViewerMenu = ({ sortBy, sortOptions, changeSort }) => {
  return (
    <div className="ViewerMenu">
      <span>Sort by:</span>
      {sortOptions.map((sort) => (
        <button key={sort} onClick={() => changeSort(sort)} className={`btn ${sortBy === sort ? 'active' : ''}`}>
          {sort}
        </button>
      ))}
    </div>
  );
};

export default ViewerMenu;
