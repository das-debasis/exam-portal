import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import AuthContext from "../store/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Comp from "../images/Computer login.gif";
export const Login = (props) => {
  const AuthCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const EmailHandler = (event) => {
    setUser((prevState) => {
      return {
        ...prevState,
        email: event.target.value,
      };
    });
  };

  const PasswordHandler = (event) => {
    setUser((prevState) => {
      return {
        ...prevState,
        password: event.target.value,
      };
    });
  };
  const loginHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:1000/user/login", user, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        // window.location.reload(false);
        // const user=response.data.user;
        // const user_data={
        //   id:user._id

        // }
        // const { fname, lname, contact, email, org, _id } = response.data.user;
        // const user1_data = {
        //   fname,
        //   lname,
        //   contact,
        //   email,
        //   org,
        //   _id,
        // };
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // console.log(user1_data);
        localStorage.setItem("token", response.data.token);
        AuthCtx.setIsLoggedIn(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setErr(error.response.data.message);
      });
  };

  return (
    <center className="login_main">
      <div className="imga">
        <img src={Comp} className="img_style" />

        <div className="xyz">
          <h1 className="login_h1">Login</h1>
          {err.isError ? (
            <div className="errorMessage">{err.message}</div>
          ) : null}
          <div id="aaa">
            <label htmlFor="username">Email : </label>
            <input
              type="email"
              className="form-control"
              placeholder="pkayy@gmail.com"
              onChange={EmailHandler}
            />
          </div>
          <div className="pw">
            <label htmlFor="username">Password : </label>
            <input
              type="password"
              className="form-control"
              placeholder="123456789"
              onChange={PasswordHandler}
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark"
            id="btnaa"
            onClick={loginHandler}
          >
            CONTINUE
          </button>
          <div id="acnt">
            Don't have an account?
            <a href="register.html" id="signup">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </center>
  );
};
