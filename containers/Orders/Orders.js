import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios";
import withErrorHandler from "../../HOC/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as orderActions from "../../store/actions/index";
class Orders extends Component {
  componentDidMount() {
    this.props.onFetchOrders(this.props.token);
  }
  render() {
    return (
      <div>
        {this.props.orders.map((order) => (
          <Order
            key={order.id}
            ingrediants={order.ingrediants}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}
const mapStatToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.orderLoading,
    token: state.auth.token,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: (token) => dispatch(orderActions.fetchOrders(token)),
  };
};
export default connect(
  mapStatToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
