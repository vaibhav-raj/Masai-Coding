import { ADD_COMMENT, TOGGLE_LIKE } from "./actionType";

export const toggleLike = (payload) => {
  return { type: TOGGLE_LIKE, payload };
};

export const addComment = (payload) => {
  return { type: ADD_COMMENT, payload };
};
