import React from "react";

const FilterButton = props => {
  let { tag, handleChangeFilter, isActive } = props;
  return (
    <button className={`filter-button ${isActive ? "active" : "inactive"}`} onClick={() => handleChangeFilter(tag)}>
      { tag.name }
    </button>
  )
}

export default FilterButton;