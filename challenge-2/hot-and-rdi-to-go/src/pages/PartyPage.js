import React, { useState } from "react";
import cheese from "../img/cheeseq.jpeg";
import "./PartyPage.css";

export default function PartyPage(props) {
  const [total, setTotal] = useState(0);
  const [numOrders, setNumOrders] = useState(0);

  const items = () => {
    ["ribs"].map(name => {
      return (
        <div className="item">
          <img src={cheese}></img>
          <p>%rax of ribs</p>
          <p>$16.99</p>
        </div>
      );
    })
  }

  const nextPage = () => {
    props.setPage(2)
  }

  return (
    <div>
      <h2>Your current total is ${total} for {numOrders} orders</h2>
      {/*items*/}
        <div className="item">
          <img src={cheese}></img>
          <p>%rax of ribs</p>
          <p>$16.99</p>
        </div>
      <button className="recommend-button" onClick={nextPage}>get order recommendation</button>
    </div>
  );
}


/* name, price, image */