import React from "react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Image from "../images/Learning-bro.png";
export const ThoughtList = () => {
  const [thought, setThought] = useState([]);
  const [vcomment, setVcomment] = useState([]);
  const [thoughtmain, setThoughtMain] = useState([]);
  const [create, setCreate] = useState("");
  const [comment, setComment] = useState("");
  const [err, setErr] = useState("");
  const [cerr, setCerr] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getThought();
  }, [thought]);
  useEffect(() => {
    getComment();
  }, [vcomment]);
  const getThought = async () => {
    const data = await fetch("http://localhost:1000/thought");
    const thought_data = await data.json();
    setThought(thought_data.thoughts);
  };
  const getComment = async () => {
    const URL = "http://localhost:1000/thought/" + thoughtmain._id;
    const data = await fetch(URL);
    const comment_data = await data.json();
    setVcomment(comment_data.comments);
  };
  const createHandler = async (e) => {
    e.preventDefault();
    if (create == "") {
      setErr("Write something");
    } else {
      await saveThoughtData(create);
    }
  };
  const commentHandler = async (e) => {
    e.preventDefault();
    if (comment == "") {
      setCerr("Write something");
    } else {
      await saveCommentData(comment);
    }
  };
  const saveThoughtData = async (create) => {
    const thought1 = {
      thoughtText: create,
      thoughtCreatedBy: "pradoshpks",
    };
    const message = await axios.post("http://localhost:1000/thought", thought1);
    setErr(message.message);
  };
  const saveCommentData = async (comment) => {
    const comment1 = {
      commentText: comment,
      commentCreatedBy: "pradoshpks",
    };
    const URL = "http://localhost:1000/thought/addcomment/" + thoughtmain._id;
    const message = await axios.put(URL, comment1);
    setCerr(message.message);
  };
  return (
    <div>
      <div className="lefto">
        <textarea
          placeholder="Type here..."
          name="write something"
          id=""
          rows="10"
          onChange={(e) => setCreate(e.target.value)}
        ></textarea>
        <br />
        <button className="b" onClick={createHandler}>
          Create
        </button>
        <br />
        <br />
        {thought.map((singleData, index) => {
          return (
            <div
              className="card"
              key={index}
              onClick={() => setThoughtMain(singleData)}
            >
              {singleData.thoughtText}
              <br />
              <a href="">{singleData.thoughtComments.length} &nbsp;</a>
              <a href="">{singleData.thoughtCreatedBy}</a>
            </div>
          );
        })}
      </div>
      <div>
        {console.log(thoughtmain)}
        {thoughtmain.length == 0 ? (
          <>
            <img className="rightImage" src={Image} alt="" />
          </>
        ) : (
          <div className="righto">
            <div className="title">{thoughtmain.thoughtText}</div>
            <a className="mainlike" href="">
              <i className="fa-regular fa-heart"></i> 112 &nbsp;
            </a>
            <br />
            <br />
            <div className="form">
              <input
                type="text"
                placeholder="Comment"
                onChange={(e) => setComment(e.target.value)}
              />
              <button className="mainc" onClick={commentHandler}>
                comment
              </button>
            </div>
            <br />
            <div className="comments">
              {thoughtmain.thoughtComments.map((i, index) => {
                return (
                  <div className="card1" key={index}>
                    {i.commentText}
                    <br />
                    <a href="">{i.commentCreatedBy} &nbsp;</a>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
