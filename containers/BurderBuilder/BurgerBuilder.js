import React, { Component } from "react";
import Aux from "./../../HOC/Auxhoc";
import Burger from "./../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BulidControls/BuildCotrols";
import Model from "./../../components/UI/Model/MOdel";
import OrderSummery from "./../../components/Burger/OrderSummery/OrderSummery";
import axios from "../../axios";
import Spinner from "../../components/UI/Spiner/Spinner";
//import withErrorHandler from "../../HOC/withErrorHandler/withErrorHandler";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actionsTypes from "../../store/actions/index";

class BurgerBuilder extends Component {
  state = {
    purchasing: false,
  };
  componentDidMount() {
    //console.log("this is component didi mount", this.props.ings);
    this.props.onInitIngrediant();
  }
  udpatePurchase(ingrediant) {
    const sum = Object.keys(ingrediant)
      .map((igKey) => {
        return ingrediant[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };
  purchaseCanceleHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push("/checkout");
  };

  render() {
    const disabledInfo = {
      ...this.props.ings,
    };
    //console.log(disabledInfo);
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
      //it will return {salad:true ,meat:flas,....}
      //to use its value in disabled  HTML attr in
      //our buttons
    }
    let orderdummery = null;
    let burger = this.props.error ? (
      <p style={{ textAlign: "center" }}>INGREDIANT can't be loaded !</p>
    ) : (
      <Spinner />
    );
    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingrediant={this.props.ings} />
          <BuildControls
            addIngrediant={this.props.onIngrediantAdd}
            removeIngrediant={this.props.onIngrediantRemove}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.udpatePurchase(this.props.ings)}
            ordered={this.purchasingHandler}
          />
        </Aux>
      );
      orderdummery = (
        <OrderSummery
          price={this.props.price.toFixed(2)}
          ingrediants={this.props.ings}
          canceled={this.purchaseCanceleHandler}
          continue={this.purchaseContinueHandler}
        />
      );
    }
    return (
      <Aux>
        <Model
          show={this.state.purchasing}
          modelClosed={this.purchaseCanceleHandler}
        >
          {orderdummery}
        </Model>
        {burger}
      </Aux>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.burgerBulider.ingrediant,
    price: state.burgerBulider.totalPric,
    error: state.burgerBulider.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onIngrediantAdd: (ingName) => dispatch(actionsTypes.addIngrediant(ingName)),
    onIngrediantRemove: (ingName) =>
      dispatch(actionsTypes.removeIngrediant(ingName)),
    onInitIngrediant: () => {
      dispatch(actionsTypes.initEngrediant());
    },
    onInitPurchase: () => dispatch(actionsTypes.purchaseInit()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BurgerBuilder, axios));
