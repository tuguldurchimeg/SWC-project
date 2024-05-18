import React, { useState, useEffect } from "react";
import "./ToggleSwitch.css";
interface ToggleSwitchProps {
  onChange: (isChecked: boolean) => void; 
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onChange }) => {
  const [checked, setChecked] = useState(false);

  // useEffect to trigger onChange when checked state changes
  useEffect(() => {
    onChange(checked);
  }, [checked, onChange]);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="container">
      <div className="toggle-switch">
        <input
          type="checkbox"
          className="checkbox"
          name="switch"
          id="switch-tp"
          checked={checked}
          onChange={handleChange}
        />
        <label className="label" htmlFor="switch-tp">
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
