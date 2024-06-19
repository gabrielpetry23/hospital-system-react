import React from 'react'
import { FiMail } from "react-icons/fi";

export default function Login() {
    return (
        <div className="login-page">
    <div className="login-container">
      <h1 id='bem-vindo-text'>Bem vindo</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email" id='email-text'>Email</label>
          <input type="text" id='email-input' placeholder='Digite seu email' />
        </div>
        <div className="form-group">
          <label htmlFor="password" id="password-text">Password</label>
          <input type="password" id="password-input" placeholder='Digite sua senha' />
        </div>
        <button type="submit" id='login-button' >
            <h1 id='login-text'>Login</h1>
        </button>
      </form>
    </div>
  </div>
    );
}