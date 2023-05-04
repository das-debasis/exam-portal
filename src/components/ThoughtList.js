import React from "react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Comment from "../images/chat-bubble.png";
import axios from "axios";
import Image from "../images/Learning-bro.png";
export const ThoughtList = () => {
  const user_data = JSON.parse(localStorage.getItem("user"));
  const [thought, setThought] = useState([]);
  const [thoughtind, setThoughtInd] = useState(-1);
  const [create, setCreate] = useState("");
  const [comment, setComment] = useState("");
  const [err, setErr] = useState("");
  const [cerr, setCerr] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getThought();
  }, [thought]);

  const getThought = async () => {
    const data = await fetch("http://localhost:1000/thought");
    const thought_data = await data.json();
    setThought(thought_data.thoughts);
  };
  //   const getComment = async () => {
  //     const URL = "http://localhost:1000/thought/" + thoughtmain._id;
  //     const data = await fetch(URL);
  //     const comment_data = await data.json();
  //     setVcomment(comment_data.comments);
  //   };
  const createHandler = async (e) => {
    if (create == "" || !create.trim()) {
      setErr("Write something");
    } else {
      await saveThoughtData(create);
    }
    setCreate("");
  };
  const commentHandler = async (e) => {
    e.preventDefault();
    if (comment == "" || !comment.trim()) {
      setCerr("Write something");
    } else {
      await saveCommentData(comment);
    }
    setComment("");
  };
  const saveThoughtData = async (create) => {
    const thought1 = {
      thoughtText: create,
      thoughtCreatedBy: user_data.email,
    };
    const message = await axios.post("http://localhost:1000/thought", thought1);
    setErr(message.message);
  };
  const saveCommentData = async (comment) => {
    const comment1 = {
      commentText: comment,
      commentCreatedBy: user_data.email,
    };
    const URL =
      "http://localhost:1000/thought/addcomment/" + thought[thoughtind]._id;
    const message = await axios.put(URL, comment1);
    setCerr(message.message);
  };

  return (
    <div>
      <div className="lefto">
        {err ? <div className="errorMessage1">{err}</div> : null}
        <textarea
          placeholder="Type here..."
          name="write something"
          id="createThought"
          rows="5"
          value={create}
          onChange={(e) => setCreate(e.target.value)}
        ></textarea>
        <br />
        <button type="submit" className="b" onClick={createHandler}>
          Create
        </button>
        <br />
        <br />
        <div className="thoughtList">
          {thought.map((singleData, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => setThoughtInd(index)}
              >
                {singleData.thoughtText}
                <br />
                <div className="comments">
                  <img className="icon1" src={Comment} alt="" />
                  <div className="commentLength">
                    {singleData.thoughtComments.length}
                  </div>
                  <div className="createdBy">{singleData.thoughtCreatedBy}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {thoughtind == -1 ? (
          <>
            <img className="rightImage" src={Image} alt="" />
          </>
        ) : (
          <div className="righto">
            <div className="title">{thought[thoughtind].thoughtText}</div>
            <a className="mainlike" href="">
              <img className="icon1" src={Comment} alt="" />
              <div className="commentLength">
                {thought[thoughtind].thoughtComments.length}
              </div>
            </a>
            <br />
            <br />
            <form className="form">
              {cerr ? <div className="errorMessage1">{cerr}</div> : null}
              <input
                id="comment"
                type="text"
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button type="submit" className="mainc" onClick={commentHandler}>
                comment
              </button>
            </form>
            <br />
            <div className="comments">
              {thought[thoughtind].thoughtComments.map((i, index) => {
                return (
                  <div className="card1" key={index}>
                    {i.commentText}
                    <br />
                    <div className="createdBy1">{i.commentCreatedBy}</div>
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
