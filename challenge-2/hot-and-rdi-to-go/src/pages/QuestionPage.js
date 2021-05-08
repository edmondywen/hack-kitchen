import React, { useContext } from "react";
import Question from "../components/Question.js";
import cheese from "../img/cheeseq.jpeg";
import "./QuestionPage.css";
import { ScoreContext } from "../components/ScoreContext";
import { ScoreProvider } from "../components/ScoreContext";

export default function QuestionPage(props) {
  const { questionList, progression, userProfile } = useContext(ScoreContext);
  const nextPage = () => {
    props.setPage(3);
  };

  const questionComponents = questionList.map((item) => (
    <Question question={item.question} response={item.response} />
  ));
  const currentComponent = questionComponents[progression];
  return (
    <div className="question-page">
      <h2 className="progress">{progression + 1}/10</h2>
      {currentComponent}
      <div className="background">
        <button
          className="swipe-red"
          onClick={() => {
            console.log("User's salty  is " + userProfile.salty);
            currentComponent.props.response(false);
          }}
        ></button>
        <button
          className="swipe-green"
          onClick={() => currentComponent.props.response(true)}
        ></button>
        <button className="swipe-red" onClick={nextPage}></button>
        <button className="swipe-green" onClick={nextPage}></button>
      </div>
    </div>
  );
}
