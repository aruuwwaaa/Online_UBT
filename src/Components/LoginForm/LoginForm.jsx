import "./LoginForm.css";

import React, { useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ iin: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log("Login Data:", loginData);
    // Handle login logic here
  };
  const [focused, setFocused] = useState({
    iin: false,
    password: false,
  });

  return (
    <div className="login-container">
      <h2>Войти</h2>
      <p>Добро пожаловать!</p>
      <form onSubmit={handleSubmit} className="form">
        <div
          className={`form-group2 ${
            focused.iin || loginData[0] ? "focused" : ""
          }`}
        >
          <input
            id="iin"
            type="iin"
            value={loginData[0]}
            onFocus={() => setFocused({ ...focused, iin: true })}
            onBlur={() =>
              setFocused({
                ...focused,
                iin: loginData.length > 0,
              })
            }
            onChange={(e) => setLoginData[0](e.target.value)}
          />
          <label htmlFor="iin">ИИН*</label>
        </div>

        <div
          className={`form-group2 ${
            focused.password || loginData[0] ? "focused" : ""
          }`}
        >
          <input
            id="password"
            type="password"
            value={loginData[1]}
            onFocus={() => setFocused({ ...focused, password: true })}
            onBlur={() =>
              setFocused({
                ...focused,
                password: loginData.length > 0,
              })
            }
            onChange={(e) => setLoginData[1](e.target.value)}
          />
          <label htmlFor="password">Пароль*</label>
        </div>
        <button type="submit" className="login-button">
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
