import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import AuthContext from "../store/AuthContext";
export const StartExam = () => {
  return (
    <div className="start-container">
      <h1 className="title">Quiz Application</h1>

      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>
          Each question has three options. You can choose only one options.
        </li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <div className="start1">
        <Link className="btn1" to={"/mainexam"}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
};
