import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigator = useNavigate();
  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("German");
    navigator(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1 style={{ color: "white" }}>Login</h1>
      <hr style={{ color: "white" }} />
      <button
        className="btn btn-primary"
        onClick={onLogin}
        style={{ background: "white", border: "none", color: "black" }}
      >
        Login
      </button>
    </div>
  );
};
