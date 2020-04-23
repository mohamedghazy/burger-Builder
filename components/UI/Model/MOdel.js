import React, { Component } from "react";
import classes from "./Model.css";
import Aux from "./../../../HOC/Auxhoc";
import BackDrop from "./../Backdrop/BackDrop";
class Model extends Component {
  //improving app performanec by allow rerending component
  //only for important component
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  render() {
    return (
      <Aux>
        <BackDrop show={this.props.show} clicked={this.props.modelClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show
              ? "translateY(0)"
              : "translateY(-1000vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}
export default Model;
