import React from "react";
import { Icon } from "@iconify/react";
import earthIcon from "@iconify/icons-mdi/earth";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <ul className="nav-links">
        <li>
          <Link to="/" className="link">
            <h1>
              <Icon icon={earthIcon} className="location-icon" /> Earth
              Observatory Natural Event Tracker (EONET)
            </h1>
          </Link>
        </li>
        <li>
          <Link to="/about" className="link">
            <h1>About</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
