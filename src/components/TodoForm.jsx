import React, { useState } from "react";

export const TodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAdd(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="task"
      />
      <button type="submit">Add</button>
    </form>
  );
};
