import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { ADD_TODO, DELETE_TODO } from "../store/constants/ActionType";

const TodoPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [newTodo, setNewTodo] = useState("");

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  const handleAddTodo = () => {
    dispatch({ type: ADD_TODO, payload: newTodo });
    setNewTodo("");
  };

  return (
    <div>
      <h2>todoList</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              <span>{todo.text}</span>
              <button
                onClick={() =>
                  dispatch({ type: DELETE_TODO, payload: todo.id })
                }
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoPage;
