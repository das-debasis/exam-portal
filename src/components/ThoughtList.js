import React from "react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export const ThoughtList = () => {
  const [thought, setThought] = useState([]);
  const [thoughtmain, setThoughtMain] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getThought();
  }, [thought]);
  const getThought = async () => {
    const data = await fetch("http://localhost:1000/thought");
    const thought_data = await data.json();
    setThought(thought_data.thoughts);
  };
  return (
    <div className="lefto">
      <textarea
        placeholder="Type here..."
        name="write something"
        id=""
        rows="10"
      ></textarea>
      <br />
      <button className="b">Create</button>
      <br />
      <br />
      {thought.map((singleData, index) => {
        return (
          <div className="card" key={index}>
            {singleData.thoughtText}
            <br />
            <a href="">{singleData.thoughtComments.length} &nbsp;</a>
            <a href="">{singleData.thoughtCreatedBy}</a>
          </div>
        );
      })}
    </div>
  );
};
