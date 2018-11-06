import React from 'react';

const FilterButton = ({ onClick }) => {
  return (
    <div>
      <button type="button" onClick={onClick}>FIlter</button>
    </div>
  );
};

export default FilterButton;
