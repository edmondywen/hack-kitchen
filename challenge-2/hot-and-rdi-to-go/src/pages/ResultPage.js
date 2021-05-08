import React, { useContext, useState } from "react";
import "./ResultPage.css";
import { ScoreContext } from "../components/ScoreContext";
import { foods } from "../components/foods.js";

export default function ResultPage(props) {
  const { userProfile } = useContext(ScoreContext);
  //Euclidian distance stuff
  const [recommendation, setRecommendation] = useState(recommendFood(userProfile));

  return (
    <div className="result-page">
      <h2>you should try these {recommendation.name}!</h2>
      <img src={props.image} alt={props.imageDescription}></img>
      <button className="order-button">order now</button>
    </div>
  );
}

function recommendFood(user) {
  const min = calcDistance(user, foods[0]);
  const minFood = foods[0];
  const distance = 0;
  for (let item of foods) {
    distance = calcDistance(user, item);
    if (distance < min) {
      minFood = item;
      min = distance;
    }
  }
  return minFood;
}

function calcDistance(user, food) {
  const experimentalSquared =
    (user.experimental - food.experimental) *
    (user.experimental - food.experimental);
  const saltySquared = (user.salty - food.salty) * (user.salty - food.salty);
  const sweetSquared = (user.sweet - food.sweet) * (user.sweet - food.sweet);
  const healthySquared =
    (user.healthy - food.healthy) * (user.healthy - food.healthy);

  const distance = Math.sqrt(
    experimentalSquared + saltySquared + sweetSquared + healthySquared
  );
  return distance;
}

/*
<ResultPage 
    menu="%rax of ribs"
    image={cheese}
    imageDescription="a tasty lookin rack of ribs"
/>
*/
