import React, { useContext } from "react";
import Question from "../components/Question.js";
import cheese from "../img/cheeseq.jpeg";
import "./QuestionPage.css";
import { ScoreContext } from "../components/ScoreContext";
import { ScoreProvider } from "../components/ScoreContext";

export default function QuestionPage(props) {
  const { questionList } = useContext(ScoreContext);

  const nextPage = () => {
    props.setPage(3);
  }

  const questionComponents = questionList.map((item) => (
    <Question question={item.question} response={item.response} />
  ));
  return (
    <div className="question-page">
      <h2 className="progress">1/10</h2>
      <Question
        question="ya like cheese?"
        image={cheese}
        imageDescription="a dog with cheese on its head"
      />
      <div className="background">
        <button className="swipe-red" onClick={nextPage}></button>
        <button className="swipe-green" onClick={nextPage}></button>
      </div>
    </div>
  );
}
