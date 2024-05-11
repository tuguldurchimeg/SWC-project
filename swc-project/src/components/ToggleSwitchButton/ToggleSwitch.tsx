import React from "react";
import "./ToggleSwitch.css";
 
const ToggleSwitch = () => {
  return (
    <div className="container">
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox"
               name="switch" id="switch-tp" />
        <label className="label" htmlFor="switch-tp">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
 
export default ToggleSwitch;