import React, { useState, useEffect } from "react";

export const Exam = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(120); // 2 minutes in seconds
  const [final, setFinal] = useState([0, 0, 0]);
  const questions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "Madrid", "Rome", "Berlin"],
      answer: "Paris",
    },
    {
      id: 2,
      question: "What is the largest country in the world?",
      options: ["China", "Russia", "USA", "Canada"],
      answer: "Russia",
    },
    {
      id: 3,
      question: "What is the currency of Japan?",
      options: ["Yen", "Dollar", "Euro", "Pound"],
      answer: "Yen",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining((time) => time - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timeRemaining === 0) {
      setQuizCompleted(true);
    }
  }, [timeRemaining]);

  const handleOptionClick = (option) => {
    let arr = [...final];
    if (questions[currentQuestion].answer === option) {
      arr[currentQuestion] = 1;
      setFinal(arr);
    } else {
      arr[currentQuestion] = 0;
      setFinal(arr);
    }
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (selectedOption === "") {
      return;
    }

    if (currentQuestion === questions.length - 1) {
      setQuizCompleted(true);
      return;
    }

    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setSelectedOption("");
  };

  const handleRestartClick = () => {
    setQuizCompleted(false);
    setCurrentQuestion(0);
    setSelectedOption("");
    setTimeRemaining(120);
  };
  console.log(final);
  const count = final.reduce((acc, curr) => {
    if (curr === 1) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div className="quiz-app">
      {!quizCompleted ? (
        <>
          <QuizHeader timeRemaining={timeRemaining} />
          <QuestionContainer
            question={questions[currentQuestion]}
            selectedOption={selectedOption}
            handleOptionClick={handleOptionClick}
            handleNextClick={handleNextClick}
            questions={questions}
            currentQuestion={currentQuestion}
          />
        </>
      ) : (
        <div className="quiz-header">
          <h1>You secured</h1>
          <div className="timer">{count}</div>
        </div>
        // <Results score={final} handleRestartClick={handleRestartClick} />
      )}
    </div>
  );
};

function QuizHeader({ timeRemaining }) {
  return (
    <div className="quiz-header">
      <h1>Quiz App</h1>
      <div className="timer">{`Time Remaining: ${timeRemaining}`}</div>
    </div>
  );
}

function QuestionContainer({
  question,
  selectedOption,
  handleOptionClick,
  handleNextClick,
  questions,
  currentQuestion,
}) {
  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <div className="options-container">
        {question.options.map((option, index) => (
          <label key={index} className="option">
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionClick(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleNextClick}>
        {!(currentQuestion === questions.length - 1) ? <>Next</> : <>Submit</>}
      </button>
    </div>
  );
}
