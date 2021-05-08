import React from "react";
import "./Question.css";

export default function Question(props) {
  return (
    <div className="question-container">
      <h2 className="question">{props.question}</h2>
      <img src={props.image} alt={props.imageDescription}></img>
    </div>
  );
}

const questionList = [
  {
    question: "OSDJFSDFJSOD",
    response: clickedBoneless,
  },
];
export { questionList };

function clickedBoneless(response) {
  if (response) {
    dispatchUserProfile({ type: "changeSweetBy", payload: 5 });
    dispatchUserProfile({ type: "changeSaltyBy", payload: -5 });
  } else {
    dispatchUserProfile({ type: "changeSweetBy", payload: -5 });
    dispatchUserProfile({ type: "changeSaltyBy", payload: 5 });
  }
}

/*
<Question 
    question="ya like cheese?"
    image={cheese}
    imageDescription="a dog with cheese on its head"
/>
*/
