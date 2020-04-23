import React from "react";
import Aux from "./../../../HOC/Aux";
import Buttons from "./../../UI/Buttons/Button";
const orderSummery = props => {
  const ingrediantsSummary = Object.keys(props.ingrediants).map(igkey => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>{igkey}</span> :{" "}
        {props.ingrediants[igkey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingrediant</p>
      <ul>{ingrediantsSummary}</ul>
      <p>
        <strong>Total Price :{props.price}</strong>
      </p>
      <p>Continue to Chekout?</p>
      <Buttons btnType="Danger" clicked={props.canceled}>
        Cancel Order
      </Buttons>
      <Buttons btnType="Success" clicked={props.continue}>
        Continue
      </Buttons>
    </Aux>
  );
};
export default orderSummery;
