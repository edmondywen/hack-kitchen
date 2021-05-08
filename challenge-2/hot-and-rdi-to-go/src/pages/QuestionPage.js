import React, { useContext } from "react";
import Question from "../components/Question.js";
import cheese from "../img/cheeseq.jpeg";
import "./QuestionPage.css";
import { ScoreContext } from "../components/ScoreContext";

export default function QuestionPage(props) {
  const { questionList } = useContext(ScoreContext);
  return (
    <div className="question-page">
      <h2 className="progress">1/10</h2>
      <Question
        question="ya like cheese?"
        image={cheese}
        imageDescription="a dog with cheese on its head"
      />
      <div className="background">
        <button className="swipe-red" onClick={props.response}></button>
        <button className="swipe-green" onClick={props.response}></button>
      </div>
    </div>
  );
}
