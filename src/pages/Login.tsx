import React from "react";
import { FiMail, FiLock } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function doLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validEmail = "gabriel@gmail.com";
    const validPassword = "1234";

    if (email === validEmail && password === validPassword) {
      navigate("/Clients");
    } else {
      setError("Email ou senha incorretos");
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 id="bem-vindo-text">Bem vindo</h1>
        <form onSubmit={doLogin}>
          <div className="form-group">
            <label htmlFor="email" id="email-text">
              Email
            </label>
            <div className="input-with-icon">
              <FiMail className="icon" />
              <input
                type="text"
                id="email-input"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password" id="password-text">
              Password
            </label>
            <div className="input-with-icon">
              <FiLock className="icon" />
              <input
                type="password"
                id="password-input"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" id="login-button">
            <h1 id="login-text">Login</h1>
          </button>
        </form>
      </div>
    </div>
  );
}
