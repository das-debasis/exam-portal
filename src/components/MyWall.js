import React from "react";
import Call from "../images/call.jpg";
import Org from "../images/school.png";
import Mail from "../images/mail.png";
import image from "../images/123.png";
export const MyWall = () => {
  const user_data = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="content">
      <div className="left">
        <div className="iname">
          {user_data.fname}
          <br />
          {user_data.lname}
        </div>
        <div className="details">
          <a href="">
            <img className="icon" src={Mail} alt="" /> {user_data.email}
          </a>
          <br />
          <a href="">
            <img className="icon" src={Call} alt="" />
            {user_data.contact}
          </a>
          <br />
          <a href="">
            <img className="icon" src={Org} alt="" /> {user_data.org}
          </a>
        </div>
      </div>
      <div className="dp">
        <br />
        <br />
        <img src={image} alt="" />
      </div>
    </div>
  );
};
