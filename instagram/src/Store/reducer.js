import { ADD_COMMENT, TOGGLE_LIKE } from "./actionType";

const initState = {
  image: [
    {
      id: "1Image",
      title: "New Img",
      url: "https://images4.fanpop.com/image/photos/22100000/The-number-numerology-22189655-1732-1732.jpg",
      liked: false,
    },
    
    {
      id: "2Image",
      title: "Nature Image",
      url: "https://images4.fanpop.com/image/photos/22100000/The-number-numbers-22189064-1732-1732.jpg",
      liked: true,
    },
  ],
  comment: [{ imageId: "1Image", id: "1", text: "Nice Pic" }],
};

export const reducerfunc = (state = initState, { type, payload }) => {
  switch (type) {
    case TOGGLE_LIKE: {
      const newImage = state.image.map((img) =>
        img.id === payload ? { ...img, liked: !img.liked } : img
      );
      return {
        ...state,
        image: newImage,
      };
    }
    case ADD_COMMENT: {
      return {
        ...state,
        comment: [...state.comment, payload],
      };
    }
    default:
      return state;
  }
};
