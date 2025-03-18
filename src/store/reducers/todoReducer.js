import { actionTypes } from "../actionTypes";

const inititalState = {
  todos: [],
  is_done: false,
  x: "true",
  y: "",
};

const todoReducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return { ...state, todos: state.todos.concat(action.payload) };
    case actionTypes.DELETE:
      const filtered = state.todos.filter((i) => i.id !== action.payload);
      return { ...state, todos: filtered };
    case actionTypes.UPDATE:
      const updatedArr = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );
      return { ...state, todos: updatedArr };
    case actionTypes.SET:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
