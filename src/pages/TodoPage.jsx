import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { ADD_TODO, DELETE_TODO } from "../store/constants/ActionType";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

const TodoPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <TodoForm onAdd={(text) => dispatch({ type: ADD_TODO, payload: text })} />
      <TodoList
        todos={todos}
        onDelete={(id) => dispatch({ type: DELETE_TODO, payload: id })}
      />
    </div>
  );
};

export default TodoPage;
