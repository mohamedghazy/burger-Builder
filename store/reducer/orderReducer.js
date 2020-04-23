import * as orderActons from "../actions/actionType";

const initialState = {
  orders: [],
  orderLoading: false,
  purshaced: false,
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case orderActons.PURCHASE_INIT:
      return {
        ...state,
        purshaced: false,
      };
    case orderActons.PURCHESING_BURGER_START:
      return {
        ...state,
        orderLoading: true,
      };
    case orderActons.PURCHASING_SUCCESS:
      const newOrder = {
        ...action.orderData,
        orderId: action.orderId,
        purshaced: true,
      };
      return {
        ...state,
        orderLoading: false,
        orders: state.orders.concat(newOrder),
        purshaced: true,
      };
    case orderActons.PURCHASING_FAIL:
      return {
        ...state,
        orderLoading: false,
      };
    case orderActons.FETCH_ORDERS_START:
      return {
        ...state,
        orderLoading: true,
      };
    case orderActons.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.orders,
        orderLoading: false,
      };
    case orderActons.FETCH_ORDERS_FAIL:
      return {
        ...state,
        orderLoading: false,
      };
    default:
      return state;
  }
};
export default orderReducer;
