import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
export const StartExam = () => {
  return (
    <>
      <Navbar />
      <div className="start-container">
        <p className="title1">Exam Rules</p>

        <p className="rules">
          1. You will be asked 10 questions one after another.
          <br />
          2. 10 points is awarded for the correct answer.
          <br />
          3. Each question has three options. You can choose only one options.
          <br />
          4. You can review and change answers before the quiz finish.
          <br />
          5. The result will be declared at the end of the quiz.
        </p>

        <div className="start1">
          <Link className="btn1" to={"/mainexam"}>
            Start Quiz
          </Link>
        </div>
      </div>
    </>
  );
};
