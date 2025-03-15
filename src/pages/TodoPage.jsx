import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import {
  ADD_TODO,
  DELETE_ALL_TODOS,
  DELETE_TODO,
  LOGOUT,
} from "../store/constants/ActionType";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
import styled from "styled-components";

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
      <Button onClick={() => dispatch({ type: DELETE_ALL_TODOS })}>
        Delete All
      </Button>
      <Button onClick={() => dispatch({ type: LOGOUT })}>Logout</Button>
    </div>
  );
};

const Button = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;
export default TodoPage;
