import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  return (
    <div className="header">
      <nav>
        <a href="index.html">e-Exam</a>
        <a href="openform.html">Openforum</a>
        <a href="">e-Repository</a>
        <a href="mywall.html">MyWall</a>
      </nav>
      <div className="form-input">
        <input type="text" className="search_bar" />
        <button type="submit" className="search_btn">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ color: "#ffffff" }}
          />
        </button>
      </div>
      <div className="login">
        <nav className="login">
          <a href="register.html">SIGNUP</a>
        </nav>
      </div>
    </div>
  );
};
