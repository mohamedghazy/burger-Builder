import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Buttons/Button";
import classes from "./CheckOutSummary.css";
const CheckoutSummary = props => {
  return (
    <div className={classes.CheckOutSummary}>
      <h1> we hope it testes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingrediant={props.ingrediant} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        Continue
      </Button>
    </div>
  );
};
export default CheckoutSummary;
