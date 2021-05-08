import React from "react";
import Question from "../components/Question.js";
import cheese from "../img/cheeseq.jpeg";
import "./QuestionPage.css";

export default function QuestionPage(props) {
  return (
    <div className="question-page">
      <h2 className="progress">1/10</h2>
      <Question
          question="ya like cheese?"
          image={cheese}
          imageDescription="a dog with cheese on its head"
      />
      <div className="background">
      <button className="swipe-red"></button>
        <button className="swipe-green"></button>
      </div>
    </div>
  );
}