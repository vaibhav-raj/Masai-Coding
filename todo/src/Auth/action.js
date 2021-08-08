import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGOUT_SUCCESS,
} from "./actionType";
import axios from "axios";

export const loginLoading = () => ({
  type: LOGIN_LOADING,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload: payload,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const fetchUser = (payload) => {
  return (dispatch) => {
    dispatch(loginLoading());
    axios
      .post(`https://reqres.in/api/login`, payload)
      .then((res) => dispatch(loginSuccess(res.data.token)))
      .catch((err) => dispatch(loginFailure(err)));
  };
};
