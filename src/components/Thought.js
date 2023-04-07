import React from "react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "./Learning-bro.png";
export const Thought = (props) => {
  const [thoughtmain, setThoughtMain] = useState([]);
  return (
    <div>
      {thoughtmain.length == 0 ? (
        <>
          <img className="rightImage" src={Image} alt="" />
        </>
      ) : (
        <div class="righto">
          <div class="title">
            What are the gifts you got after clearing the IIT? Even though I
            didn’t clear JEE-Mains 2023 1st session with rank 85623 I still
            recieved some gifts. I recieved this tab from my sister. I was given
            earphones by my bestie. That’s all……
          </div>
          <a class="mainlike" href="">
            <i class="fa-regular fa-heart"></i> 112 &nbsp;
          </a>
          <br />
          <br />
          <div class="form">
            <input type="text" placeholder="Comment" />
            <button class="mainc">comment</button>
          </div>
          <br />
          <div class="comments">
            <div class="card1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
              ducimus.
              <br />
              <a class="mainlike" href="">
                <i class="fa-regular fa-heart"></i> 1 &nbsp;
              </a>
              <br />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
