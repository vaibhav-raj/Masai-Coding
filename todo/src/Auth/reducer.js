import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_LOADING,
  LOGOUT_SUCCESS,
} from "./actionType";
import { LocalStore, saveData } from "../component/LocalStore";

const initState = {
  isAuth: LocalStore("token") === "" ? false : true,
  token: LocalStore("token") || "",
  isLoading: false,
  isError: false,
};

export const reducerFunc = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      saveData("token", payload);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
      };

    default:
      return state;
  }
};
