import React from "react";
import BuildControl from "./BulidControl/BuildControl";
import classes from "./BuildControls.css";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Chees", type: "chees" },
  { label: "Meat", type: "meat" }
];
const builControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Currant Price : <strong>{props.price.toFixed(2)} $</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        add={() => props.addIngrediant(ctrl.type)}
        remove={() => props.removeIngrediant(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      Oreder Now
    </button>
  </div>
);
export default builControls;
