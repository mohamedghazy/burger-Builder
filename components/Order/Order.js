import React from "react";
import calsses from "./Order.css";
const Order = props => {
  const ingrediants = [];
  for (let ingrediantName in props.ingrediants) {
    ingrediants.push({
      name: ingrediantName,
      amout: props.ingrediants[ingrediantName]
    });
  }
  const ingrediantOutPut = ingrediants.map(ig => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px"
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amout})
      </span>
    );
  });
  return (
    <div className={calsses.Order}>
      <p>Ingrediants:{ingrediantOutPut}</p>
      <p>
        Price:<strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong>
      </p>
    </div>
  );
};
export default Order;
