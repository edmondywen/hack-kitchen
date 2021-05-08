import React, { useState } from "react";

export default function PartyPage(props) {
  const [total, setTotal] = useState(0);
  const [numOrders, setNumOrders] = useState(0);
  return (
    <div>
      Your current party's total is ${total} for {numOrders}
    </div>
  );
}
