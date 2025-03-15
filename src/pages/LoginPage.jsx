import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN } from "../store/constants/ActionType";
import { Navigate } from "react-router";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuth = useSelector((state) => state.auth.isAuth);
  const handleLogin = () => {
    if (email === "aigul@gmail.com" && password === "pass") {
      dispatch({ type: LOGIN });
    }
  };

  if (isAuth) {
    return <Navigate to="/todos" />;
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>login </button>
    </div>
  );
};

export default LoginPage;
