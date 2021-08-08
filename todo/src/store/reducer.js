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

const initialState = {
  todo: [],
  newTodo: { title: "", status: "" },
  loading: false,
  error: false,
  complete: 0,
  total: 0,
};

export const reducerFunction = (state = initialState, { type, payload }) => {
  switch (type) {
    //get todo function
    case GET_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        loading: false,
        ...state,
        todo: payload,
      };
    case GET_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    //add todo function
    case ADD_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: [...state.todo, payload],
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    //delete todo function
    case DELETE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: payload,
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    //edit todo function
    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        newTodo: payload,
      };
    case UPDATE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    // TOGGLE TODO

    case TOGGLE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        todo: { ...state.todo, status: !state.todo.status },
      };
    case TOGGLE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case TOTAL_COMPLETED_TODO:
      let count = 0;
      state.todo.map((el) => (el.status === true ? count++ : count));
      return {
        ...state,
        loading: false,
        complete: count,
      };
    case TOTAL_TODO:
      return {
        ...state,
        loading: false,
        total: state.todo.length,
      };

    default:
      return state;
  }
};
