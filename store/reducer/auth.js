import * as actions from "../actions/actionType";
import { updateObject } from "./utility";
const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
};
const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};
const authSucces = (state, action) => {
  return updateObject(state, {
    token: action.idToken,
    userId: action.userId,
    error: null,
    loading: false,
  });
};
const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};
const authLogOut = (state, action) => {
  return updateObject(state, { token: null, userId: null });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.AUTH_START:
      return authStart(state, action);
    case actions.AUTH_STUCCESS:
      return authSucces(state, action);
    case actions.AUTH_FAIL:
      return authFail(state, action);
    case actions.AUTH_LOGOUT:
      return authLogOut(state, action);
    default:
      return state;
  }
};
export default reducer;
