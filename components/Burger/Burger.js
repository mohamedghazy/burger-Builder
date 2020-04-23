import React from "react";
import classes from "./Burger.css";
import Burgeringrediant from "./Burgeringrediant/Burgeringrediant";
const burger = props => {
  let ingrediantTransformer = Object.keys(props.ingrediant)
    .map(igkey => {
      return [...Array(props.ingrediant[igkey])].map((_, i) => {
        return <Burgeringrediant key={igkey + i} type={igkey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (ingrediantTransformer.length === 0) {
    ingrediantTransformer = <p>Pleas start adding ingrediants </p>;
  }

  return (
    <div className={classes.Burger}>
      <Burgeringrediant type="bread-top" />
      {ingrediantTransformer}
      <Burgeringrediant type="bread-bottom" />
    </div>
  );
};
export default burger;
