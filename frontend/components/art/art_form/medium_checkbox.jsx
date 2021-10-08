import React from "react";
import { FaCheck } from "react-icons/fa";

const MediumCheckbox = props => {
  let { medium, checked, count } = props;
  let name = medium.name.charAt(0).toUpperCase() + medium.name.slice(1);
  // let name = medium.name;
  let disabled = Boolean(!checked && count >= 3);
  return (
    <label htmlFor={name} className={`checkbox-label ${disabled ? "disabled" : "enabled"}`} onClick={(e) => props.handleCheckbox(e, medium, disabled)}>
      {/* <input type="checkbox" className="checkbox" value={name} name={name} onChange={(e) => props.handleCheckbox(e, medium)} disabled={!checked && count >= 3}/>
      <span></span> */}
      <div className={`checkbox ${disabled ? "disabled" : "enabled"} ${checked ? "checked" : "unchecked"}`}  >
        {checked ? <FaCheck /> : null}
      </div>
    {name}</label>
  )
}

export default MediumCheckbox;