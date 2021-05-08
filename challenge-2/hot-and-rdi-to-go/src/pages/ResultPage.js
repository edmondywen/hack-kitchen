import React, { useContext } from "react";
import "./ResultPage.css";
import "../components/foods.js";
import { ScoreContext } from "../components/ScoreContext";
import { foods } from "../components/foods.js";

export default function ResultPage(props) {
  const { user } = useContext(ScoreContext);
  //Euclidian distance stuff

  return (
    <div className="result-page">
      <h2>you should try these {props.menu}!</h2>
      <img src={props.image} alt={props.imageDescription}></img>
      <button className="order-button">order now</button>
    </div>
  );
}

function calcMinDistance(user) {
  const min = calcDistance(user, foods[0]);
  const minFood = foods[0]
  const distance = 0;
  for (let item of foods) {
    distance = calcDistance(user, item);
    if (distance < min){
      minFood = item;
      min = distance;
    }
  }
  return minFood;
}

function calcDistance(user, food) {
  experimentalSquared = (user.experimental - food.experimental) * (user.experimental - food.experimental);
  saltySquared = (user.salty - food.salty) * (user.salty - food.salty);
  sweetSquared = (user.sweet - food.sweet) * (user.sweet - food.sweet);
  healthySquared = (user.healthy - food.healthy) * (user.healthy - food.healthy);
  
  distance = Math.sqrt(experimentalSquared + saltySquared + sweetSquared + healthySquared);
}

/*
<ResultPage 
    menu="%rax of ribs"
    image={cheese}
    imageDescription="a tasty lookin rack of ribs"
/>
*/
