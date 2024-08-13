import React from "react";


const Tabbutton = ({ children, onSelect ,isSelected}) => {
  return (
    <div>
      <li>
        <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
          {children}
        </button>
      </li>
    </div>
  );
};

export default Tabbutton;
