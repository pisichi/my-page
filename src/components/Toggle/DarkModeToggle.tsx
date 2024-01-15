
import React, { ChangeEvent } from 'react';
import './DarkmodeToggle.css';

interface DarkModeToggleProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Dark Mode</label>
    </div>
  );
};

export default DarkModeToggle;