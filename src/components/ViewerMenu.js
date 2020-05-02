import React from 'react';
import './ViewerMenu.css';
import { pipe, map, split, toCamelCase, join, trace } from '../utils';

const ViewerMenu = ({ sortBy, sortOptions, changeSort }) => {
  const displayName = pipe(split('-'), map(toCamelCase), trace('after map'), join(' '));

  return (
    <div className="ViewerMenu">
      <span className="sort-by">Sort by:</span>
      {sortOptions.map((sort) => (
        <button key={sort} onClick={() => changeSort(sort)} className={`btn ${sortBy === sort ? 'active' : ''}`}>
          {displayName(sort)}
        </button>
      ))}
    </div>
  );
};

export default ViewerMenu;
