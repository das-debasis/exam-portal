import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const Thoughts = () => {
  return (
    <div>
      <div class="lefto">
        <textarea
          placeholder="Type here..."
          name="write something"
          id=""
          rows="10"
        ></textarea>
        <br />
        <button class="b">Create</button>
        <br />
        <br />
        <div class="card">
          What are the gifts you got after clearing the IIT? Even though I
          didn’t clear JEE-Mains 2023 1st session with rank 85623 I still
          recieved some gifts. I recieved this tab from my sister. I was given
          earphones by my bestie. That’s all……
          <br />
          <a href="">112 &nbsp;</a>
          <a href="">
            <i class="fa-regular fa-comment"></i> 67
          </a>
          <a href=""></a>
        </div>
        <br />
      </div>
    </div>
  );
};
