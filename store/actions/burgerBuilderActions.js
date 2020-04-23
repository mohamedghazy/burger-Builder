import * as actionTypes from "./actionType";
import axios from "../../axios";
export const addIngrediant = name => {
  return {
    type: actionTypes.ADD_INGREDIANTS,
    ingrediantName: name
  };
};
export const removeIngrediant = name => {
  return {
    type: actionTypes.REMOVE_INGREDIANTS,
    ingrediantName: name
  };
};
export const setIgrediant = ingrediant => {
  return {
    type: actionTypes.SET_INGREDIANTS,
    ingredient: ingrediant
  };
};
export const fetchEngredaintFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIANT_FAILED
  };
};
export const initEngrediant = () => {
  return dispatch => {
    axios
      .get("https://burger-builder-27965.firebaseio.com/ingrediants.json")
      .then(response => {
        dispatch(setIgrediant(response.data));
      })
      .catch(error => {
        dispatch(fetchEngredaintFailed());
      });
  };
};
