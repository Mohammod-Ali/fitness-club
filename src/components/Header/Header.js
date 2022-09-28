import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="nav-items">
        <div>
          <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
        </div>
        <h1>FITNESS-CLUB</h1>
      </div>
      <h3 className="select-exercise">Select your Exercise</h3>
    </nav>
  );
};

export default Header;
