import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const Navbar = () => {
  return (
    <div className="header">
      <nav>
        <a href="/">e-Exam</a>
        <a href="/openforum">Openforum</a>
        <a href="">e-Repository</a>
        <a href="">MyWall</a>
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
          <a href="Register">SIGNUP</a>
        </nav>
      </div>
    </div>
  );
};
