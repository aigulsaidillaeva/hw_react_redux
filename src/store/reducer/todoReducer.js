import {
  ADD_TODO,
  DELETE_ALL_TODOS,
  DELETE_TODO,
} from "../constants/ActionType";

const initialState = { todos: [] };

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: crypto.randomUUID(), text: action.payload, complated: false },
        ],
      };

    case DELETE_ALL_TODOS:
      return { todos: [] };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};
