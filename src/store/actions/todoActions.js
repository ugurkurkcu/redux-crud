import { actionTypes } from "../actionTypes";

export const addTodo = (payload) => ({
  type: actionTypes.ADD,
  payload,
});

export const deleteTodo = (payload) => ({
  type: actionTypes.DELETE,
  payload,
});

export const updateTodo = (payload) => ({
  type: actionTypes.UPDATE,
  payload,
});
export const setTodos = (payload) => ({
  type: actionTypes.SET,
  payload,
});
