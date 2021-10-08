import React from "react";
import { BsCheck } from "react-icons/bs";

const MediumCheckbox = props => {
  let { medium, checked, count } = props;
  let name = medium.name.charAt(0).toUpperCase() + medium.name.slice(1);
  // let name = medium.name;
  let disabled = Boolean(!checked && count >= 3);
  return (
    <label htmlFor={name} className="checkbox-label">
      {/* <input type="checkbox" className="checkbox" value={name} name={name} onChange={(e) => props.handleCheckbox(e, medium)} disabled={!checked && count >= 3}/>
      <span></span> */}
      <div className={`checkbox ${disabled ? "disabled" : "enabled"}`} onClick={(e) => props.handleCheckbox(e, medium, Boolean(!checked && count >= 3))} >
        {checked ? <BsCheck /> : null}
      </div>
    {name}</label>
  )
}

export default MediumCheckbox;