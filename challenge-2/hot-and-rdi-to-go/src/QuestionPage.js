import React from "react";
import Question from "./components/Question.js";
import cheese from "./img/cheeseq.jpeg";
import "./components/Question.css";

export default function QuestionPage(props) {
  return (
    <div className="question-page">
        <Question className="question-hover" 
            question="ya like cheese?"
            image={cheese}
            imageDescription="a dog with cheese on its head"
        />
        <button className="swipe-red"></button>
        <button className="swipte-green"></button>
    </div>
  );
}