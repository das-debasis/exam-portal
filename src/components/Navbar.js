import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import AuthContext from "../store/AuthContext";
export const Navbar = () => {
  const AuthCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const LogoutHandler = () => {
    AuthCtx.setIsLoggedIn(false);
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="header">
      <nav>
        <a href="/">home</a>
        <a href="/exam">e-Exam</a>
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
        {!localStorage.getItem("token") ? (
          <nav className="login">
            <a href="Register">SIGNUP</a>
          </nav>
        ) : (
          <nav className="logout" onClick={LogoutHandler}>
            LOGOUT
          </nav>
        )}
      </div>
    </div>
  );
};
