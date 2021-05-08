import React, { useContext } from "react";
import "./ResultPage.css";
import { ScoreContext } from "../components/ScoreContext";

export default function ResultPage(props) {
  const { user } = useContext(ScoreContext);
  //Euclidian distance stuff
  function calcEuclidian(user) {
    console.log("Our function");
  }
  return (
    <div className="result-page">
      <h2>you should try these {props.menu}!</h2>
      <img src={props.image} alt={props.imageDescription}></img>
      <button className="order-button">order now</button>
    </div>
  );
}

/*
<ResultPage 
    menu="%rax of ribs"
    image={cheese}
    imageDescription="a tasty lookin rack of ribs"
/>
*/
