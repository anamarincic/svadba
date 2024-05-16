import { useState } from "react";
import "./Dropdown.styles.scss";

export function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false);

  const options = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const showMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={showMenu}>
        {selected} <i class="fa-solid fa-caret-down"></i>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              className="dropdown-item"
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
