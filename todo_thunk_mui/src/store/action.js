import {
  GET_TODO_REQUEST,
  GET_TODO_FAILURE,
  GET_TODO_SUCCESS,
  GET_TODO_ITEM_REQUEST,
  GET_TODO_ITEM_FAILURE,
  GET_TODO_ITEM_SUCCESS,
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
} from "./actionType";
import axios from "axios";

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

export const getTodoItemRequest = () => ({
  type: GET_TODO_ITEM_REQUEST,
});
export const getTodoItemSuccess = (payload) => ({
  type: GET_TODO_ITEM_SUCCESS,
  payload: payload,
});
export const getTodoItemFailure = (errorMessage) => ({
  type: GET_TODO_ITEM_FAILURE,
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
export const deleteTodoSuccess = () => ({
  type: DELETE_TODO_SUCCESS,
});
export const deleteTodoFailure = (err) => ({
  type: DELETE_TODO_FAILURE,
  payload: err,
});

export const toggleTodoRequest = () => ({
  type: TOGGLE_TODO_REQUEST,
});
export const toggleTodoSuccess = () => ({
  type: TOGGLE_TODO_SUCCESS,
});
export const toggleTodoFailure = (err) => ({
  type: TOGGLE_TODO_FAILURE,
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
export const getData = () => async (dispatch) => {
  dispatch(getTodoRequest());
  try {
    const { data } = await axios.get(`http://localhost:3001/todo`);
    dispatch(getTodoSuccess(data));
  } catch (error) {
    dispatch(getTodoFailure(error));
  }
};
export const getSingleData = (payload) => async (dispatch) => {
  dispatch(getTodoItemRequest());
  try {
    const { data } = await axios.get(`http://localhost:3001/todo/${payload}`);
    dispatch(getTodoItemSuccess(data));
  } catch (error) {
    dispatch(getTodoItemFailure(error));
  }
};

export const addTodo = (payload) => async (dispatch) => {
  dispatch(addTodoRequest());
  try {
    const { data } = await axios.post(`http://localhost:3001/todo`, payload);
    dispatch(addTodoSuccess(data));
  } catch (error) {
    dispatch(addTodoFailure(error));
  }
};

export const deleteTodo = (payload) => async (dispatch) => {
  dispatch(deleteTodoRequest());
  try {
    const { data } = await axios.delete(
      `http://localhost:3001/todo/${payload.id}`
    );
    dispatch(deleteTodoSuccess());
  } catch (error) {
    dispatch(deleteTodoFailure(error));
  }
  axios.get(`http://localhost:3001/todo`).then((response) => {
    dispatch(getTodoSuccess(response.data));
  });
};

export const toggleTodo = (payload) => async (dispatch) => {
  dispatch(toggleTodoRequest());
  try {
    const { data } = await axios.patch(
      `http://localhost:3001/todo/${payload.id}`,
      { ...payload, status: !payload.status }
    );
    dispatch(toggleTodoSuccess(data));
  } catch (error) {
    dispatch(toggleTodoFailure(error));
  }
  axios.get(`http://localhost:3001/todo`).then((response) => {
    dispatch(getTodoSuccess(response.data));
  });
};

export const updateTodo = (payload, value) => async (dispatch) => {
  dispatch(updateTodoRequest());
  try {
    let { data } = await axios.patch(
      `http://localhost:3001/todo/${payload.id}`,
      { ...payload, title: value }
    );
    dispatch(updateTodoSuccess(data));
  } catch (error) {
    dispatch(updateTodoFailure(error));
  }
  axios.get(`http://localhost:3001/todo`).then((response) => {
    dispatch(getTodoSuccess(response.data));
  });
};
