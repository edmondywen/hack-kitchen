import React from "react";
import "./ResultPage.css";

export default function ResultPage(props) {
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