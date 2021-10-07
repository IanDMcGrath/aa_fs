import React from "react";

const MediumCheckbox = props => {
  let { medium, checked, count } = props;
  let name = medium.name.charAt(0).toUpperCase() + medium.name.slice(1);
  // let name = medium.name;
  console.log(count);
  return (
    <label htmlFor={name} className="checkbox-label">
      <input type="checkbox" value={name} name={name} onChange={(e) => props.handleCheckbox(e, name)} className="form-checkbox" disabled={!checked && count >= 3}/>
    {name}</label>
  )
}

export default MediumCheckbox;