import React, { useContext, useState } from "react";
import "./ResultPage.css";
import { ScoreContext } from "../components/ScoreContext";
import { foods } from "../components/foods.js";
import cheese from "../img/cheeseq.jpeg";

export default function ResultPage(props) {
  const { userProfile, dispatchUserProfile } = useContext(ScoreContext);
  //Euclidian distance stuff
  const [recommendation, setRecommendation] = useState(
    recommendFood(userProfile)
  );

  const nextPage = () => {
    props.setPage(1);
    dispatchUserProfile({ type: "resetProfile" });
  };

  return (
    <div className="result-page">
      <h2>you should try these {recommendation.name}!</h2>
      <img src={recommendation.image} alt={recommendation.name}></img>
      <button className="order-button" onClick={nextPage}>
        order now
      </button>
    </div>
  );
}

function recommendFood(user) {
  return foods.reduce((prevFood, currFood) =>
    calcDistance(user, currFood) < calcDistance(user, prevFood)
      ? currFood
      : prevFood
  );
  //   let min = calcDistance(user, foods[0]);
  //   let minFood = foods[0];
  //   let distance = 0;
  //   for (let item of foods) {
  //     let distance = calcDistance(user, item);
  //     if (distance < min) {
  //       minFood = item;
  //       min = distance;
  //     }
  //   }
  //   return minFood;
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
