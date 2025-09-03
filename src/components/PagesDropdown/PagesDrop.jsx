import React from "react";
import "./PagesDrop.css";
import { Link } from "react-router-dom";

const PagesDrop = ({ items }) => {
  return (
    <div className="pagedrop">
      <ul className="list-unstyled px-3 py-1">
        {items.map((subItem, index) => (
          <li key={index} className="py-2">
            <Link to={subItem.link}>{subItem.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PagesDrop;
