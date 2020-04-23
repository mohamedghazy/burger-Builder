import React, { Component } from "react";
import classes from "./Burgeringrediant.css";
import PropTypes from "prop-types";
class Burgeringrediant extends Component {
  render() {
    let ingrediant = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingrediant = <div className={classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ingrediant = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingrediant = <div className={classes.Meat}></div>;
        break;
      case "chees":
        ingrediant = <div className={classes.Chees}></div>;
        break;
      case "salad":
        ingrediant = <div className={classes.Salad}></div>;
        break;
      case "bacon":
        ingrediant = <div className={classes.Bacon}></div>;
        break;
      default:
        ingrediant = null;
    }
    return ingrediant;
  }
}
Burgeringrediant.propTypes = {
  type: PropTypes.string.isRequired
};
export default Burgeringrediant;
