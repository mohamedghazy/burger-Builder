import * as actionTypes from "../actions/actionType";
// import {updateObject} from './utility'
const initialState = {
  ingrediant: null,
  totalPric: 4,
  error: false
};
const ingrediant_price = {
  salad: 0.5,
  bacon: 0.4,
  chees: 1.3,
  meat: 0.7
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIANTS:
      return {
        ...state,
        ingrediant: {
          ...state.ingrediant,
          [action.ingrediantName]: state.ingrediant[action.ingrediantName] + 1
        },
        totalPric: state.totalPric + ingrediant_price[action.ingrediantName]
      };
    case actionTypes.REMOVE_INGREDIANTS:
      return {
        ...state,
        ingrediant: {
          ...state.ingrediant,
          [action.ingrediantName]: state.ingrediant[action.ingrediantName] - 1
        },
        totalPric: state.totalPric - ingrediant_price[action.ingrediantName]
      };
    case actionTypes.SET_INGREDIANTS:
      return {
        ...state,
        ingrediant: {
          salad: action.ingredient.salad,
          bacon: action.ingredient.bacon,
          chees: action.ingredient.chees,
          meat: action.ingredient.meat
        },
        totalPric: 4,
        error: false
      };
    case actionTypes.FETCH_INGREDIANT_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};
export default reducer;
