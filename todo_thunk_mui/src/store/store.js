import { applyMiddleware, createStore } from "redux";
import { reducerFunction } from "./reducer.js";
import thunk from "redux-thunk";

export const store = new createStore(reducerFunction, applyMiddleware(thunk));
