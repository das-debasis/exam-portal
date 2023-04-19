import React from "react";
import Comp from '../images/Computer login.gif'
export const Login =  (props) => {
    return (
        <center className="login_main">
      <div className="imga">
        <img
          src={Comp}
          className="img_style"
        />

        <div className="xyz">
          <h1 className="login_h1">Login</h1>
          <div id ="aaa">
            <label for="username">Username : </label>
            <input type="text" className="form-control" placeholder="pkayy" />
          </div>
          <div className="pw">
            <label for="username">Password : </label>
            <input
              type="password"
              className="form-control"
              placeholder="123456789"
            />
          </div>
          <button type="button" className="btn btn-dark" id="btnaa">
            CONTINUE
          </button>
          <div id="acnt">
            Don't have an account?
            <a href="register.html" id="signup">Sign Up</a>
          </div>
        </div>
      </div>
    </center>
    )
}