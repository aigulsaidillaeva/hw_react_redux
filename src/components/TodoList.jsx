import React from "react";
import styled from "styled-components";

export const TodoList = ({ todos, onDelete }) => {
  return (
    <StyledList>
      {todos.map((todo) => (
        <StyledItem key={todo.id}>
          <span>{todo.text}</span>
          <StyledButton onClick={() => onDelete(todo.id)}>Delete</StyledButton>
        </StyledItem>
      ))}
    </StyledList>
  );
};

// Стили
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 400px;
  margin: 20px auto;
`;

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: #c82333;
  }
`;
