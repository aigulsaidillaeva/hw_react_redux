import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../store/constants/ActionType";
import { Navigate } from "react-router";
import styled from "styled-components";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Email должен содержать '@'");
      return;
    }
    if (password.length <= 6) {
      setError("Пароль должен быть длиннее 6 символов");
      return;
    }

    setError("");
    dispatch({ type: LOGIN });
  };

  if (isAuth) {
    return <Navigate to="/todos" />;
  }

  return (
    <StyledForm onSubmit={handleLogin}>
      <h2>Login</h2>
      <StyledInput
        type="email"
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="Password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <ErrorText>{error}</ErrorText>}
      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  );
};

export default LoginPage;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 50px auto;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  outline: none;
  &:focus {
    border-color: #007bff;
  }
`;

const StyledButton = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin: 0;
`;
