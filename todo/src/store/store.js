// import { createStore } from "redux";
// import { reducerFunction } from "./reducer.js";

// export const store = new createStore(
//   reducerFunction,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { reducerFunction } from "./reducer";
import { reducerFunc } from "../Auth/reducer";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
  todos: reducerFunction,
  auth: reducerFunc,
});

let composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// const customTunk = (store) => (next) => (action) => {
//   console.log("yourStore", store);
//   console.log("yourNext", next);
//   console.log("yourAction", action);
//   return typeof action === "function"
//     ? action(store.dispatch, store.getState())
//     : next(action);
// };

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
