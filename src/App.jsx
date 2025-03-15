import React from "react";
import { Navigate, Route, Routes } from "react-router";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/todos" element={<TodoPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
