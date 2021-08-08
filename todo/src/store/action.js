import {
  GET_TODO_REQUEST,
  GET_TODO_FAILURE,
  GET_TODO_SUCCESS,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
  TOGGLE_TODO_REQUEST,
  TOTAL_COMPLETED_TODO,
  TOTAL_TODO,
} from "./actionType";

// action creators

export const getTodoRequest = () => ({
  type: GET_TODO_REQUEST,
});
export const getTodoSuccess = (payload) => ({
  type: GET_TODO_SUCCESS,
  payload: payload,
});
export const getTodoFailure = (errorMessage) => ({
  type: GET_TODO_FAILURE,
  payload: errorMessage,
});

export const addTodoRequest = () => ({
  type: ADD_TODO_REQUEST,
});
export const addTodoSuccess = (payload) => ({
  type: ADD_TODO_SUCCESS,
  payload: payload,
});
export const addTodoFailure = (err) => ({
  type: ADD_TODO_FAILURE,
  payload: err,
});

export const deleteTodoRequest = () => ({
  type: DELETE_TODO_REQUEST,
});
export const deleteTodoSuccess = (payload) => ({
  type: DELETE_TODO_SUCCESS,
  payload: payload,
});
export const deleteTodoFailure = (err) => ({
  type: DELETE_TODO_FAILURE,
  payload: err,
});

export const updateTodoRequest = () => ({
  type: UPDATE_TODO_REQUEST,
});
export const updateTodoSuccess = (payload) => ({
  type: UPDATE_TODO_SUCCESS,
  payload: payload,
});
export const updateTodoFailure = (err) => ({
  type: UPDATE_TODO_FAILURE,
  payload: err,
});

export const toggleTodoRequest = () => ({
  type: TOGGLE_TODO_REQUEST,
});
export const toggleTodoSuccess = (payload) => ({
  type: TOGGLE_TODO_SUCCESS,
  payload: payload,
});
export const toggleTodoFailure = (err) => ({
  type: TOGGLE_TODO_FAILURE,
  payload: err,
});

export const totalTodo = () => ({
  type: TOTAL_TODO,
});
export const totalCompletedTodo = () => ({
  type: TOTAL_COMPLETED_TODO,
});
