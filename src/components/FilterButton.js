import React from 'react';

const FilterButton = ({ sortClick, filterClick }) => {
  return (
    <div>
      <button type="button" onClick={sortClick}>Sort</button>
      <button type="button" onClick={filterClick}>Filter</button>
    </div>
  );
};

export default FilterButton;
