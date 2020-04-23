import * as orderActions from "./actionType";
import axios from "../../axios";

export const purchasingSucces = (id, orderData) => {
  return {
    type: orderActions.PURCHASING_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};
export const purchasingFail = (error) => {
  return {
    type: orderActions.PURCHASING_FAIL,
    error: error,
  };
};
export const purchasingLoader = () => {
  return {
    type: orderActions.PURCHESING_BURGER_START,
  };
};
export const purchasingStart = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchasingLoader());
    axios
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
        dispatch(purchasingSucces(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(purchasingFail(error));
      });
  };
};
export const purchaseInit = () => {
  return {
    type: orderActions.PURCHASE_INIT,
  };
};
export const fetchOrdersSuccess = (orders) => {
  return {
    type: orderActions.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: orderActions.FETCH_ORDERS_FAIL,
    error: error,
  };
};
export const fetchOrdersStart = () => {
  return {
    type: orderActions.FETCH_ORDERS_START,
  };
};
export const fetchOrders = (token) => {
  return (dispatch) => {
    axios
      .get("/orders.json?auth=" + token)
      .then((res) => {
        const fechedOrders = [];
        for (let key in res.data) {
          fechedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        dispatch(fetchOrdersSuccess(fechedOrders));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
