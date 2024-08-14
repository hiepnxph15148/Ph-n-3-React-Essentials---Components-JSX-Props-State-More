import React from "react";


const Tabbutton = ({ children ,isSelected, ...props}) => {
  return (
    <div>
      <li>
        <button className={isSelected ? 'active' : undefined} {...props}>
          {children}
        </button>
      </li>
    </div>
  );
};

export default Tabbutton;
