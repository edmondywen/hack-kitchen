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
    question: "BONELESS!?!?!?!!?!?",
    response: clickedBoneless,
  },
  {
    question: "Do you feel the magic?",
    response: clickedMagic,
  },
  {
    question: "Do you have a family history of high cholestorol?",
    response: clickedCholesterol,
  },
  {
    question: "Somebody once told me the world was gonna roll me?",
    response: clickedRolled,
  },
  {
    question: "Would you feel at home at Charlie’s Chocolate Factory?",
    response: clickedChocolate,
  },
  {
    question: "Do you even lift bro?",
    response: clickedLift,
  }
];
export { questionList };

function clickedMagic(response) {
  if (response) {
    dispatchUserProfile({type: "changeExperimentalBy", payload: 20})
    dispatchUserProfile({type: "changeSaltyBy", payload: 0 });
    dispatchUserProfile({type: "changeSweetBy", payload: 0 });
    dispatchUserProfile({type: "changeHealthyBy", payload: 0})
  }
}

function clickedBoneless(response) {
  if (response) {
    dispatchUserProfile({type: "changeExperimentalBy", payload: 0})
    dispatchUserProfile({type: "changeSaltyBy", payload: -5 });
    dispatchUserProfile({type: "changeSweetBy", payload: 5 });
    dispatchUserProfile({type: "changeHealthyBy", payload: -5})
  } 
}

function clickedCholestrol(response){
  if (response) {
    dispatchUserProfile({type: "change ExperimentalBy", payload: 0})
    dispatchUserProfile({type: "changeSaltyBy", payload: -20 });
    dispatchUserProfile({type: "changeSweetBy", payload: -15 });
    dispatchUserProfile({type: "changeHealthyBy", payload: 10})
  }
}

function clickedRolled(response) {
  if (response) {
    dispatchUserProfile({type: "changeExperimentalBy", payload: 10})
    dispatchUserProfile({type: "changeSaltyBy", payload: 0 });
    dispatchUserProfile({type: "changeSweetBy", payload: -5 });
    dispatchUserProfile({type: "changeHealthyBy", payload: -5})
  } 
}

function clickedChocolate(response){
  if (response) {
    dispatchUserProfile({type: "changeSweetBy", payload: 10});
    dispatchUserProfile({type: "changeExperimentalBy", payload: 5});
    dispatchUserProfile({type: "changeHealthyBy", payload: -5});
  }
}

function clickedLift(response){
  if (response){
    dispatchUserProfile({type: "changeHealthyBy", payload: -10});
  }
}

/*
<Question 
    question="ya like cheese?"
    image={cheese}
    imageDescription="a dog with cheese on its head"
/>
*/
