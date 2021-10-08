import React from "react";

const FilterButton = props => {
  let { filter } = props;
  return (
    <button className={`nav-button`} onClick={}>
      { filter.name }
    </button>
  )
}

export default FilterButton;