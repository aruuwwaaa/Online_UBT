import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Profile.css";
import accountCircleImg from "../../assets/imgs/account_circle.png";
import passwordImg from "../../assets/imgs/password.jpg";
import navigationImg1 from "../../assets/imgs/navigation.png";
import navigationImg2 from "../../assets/imgs/navigation.png";
import "./UpdatePassword.css";

export const account = () => {
  return (
    <div className="container-1">
      <h1>Профиль</h1>
    </div>
  );
};

const PasswordUpdateForm = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focused, setFocused] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    if (newPassword === confirmPassword) {
      console.log("Password updated!");
      // Update the password in your state/store or send it to your server
    } else {
      console.log("Passwords do not match!");
      // Handle the error state
    }
  };

  return (
    <div className="user-profile">
      <div className="userSideBar">
        <div className="text1 navItem">
          <img src={accountCircleImg} />
          <h4>
            Персональная <br /> информация
          </h4>
          <img className="strelka1" src={navigationImg1} />
        </div>

        <div className="text2 navItem">
          <img src={passwordImg} />
          <h4>Обновить пароль</h4>
          <img className="strelka2" src={navigationImg2} />
        </div>
      </div>
      <div className="line-vertical"></div>

      {/* personal information */}

      <div className="password-update-container">
        <p className="password-update-header">Обновить пароль</p>
        <div className="password-update-form">
          <form onSubmit={handleSubmit} className="password-update-form">
            <div
              className={`form-group ${
                focused.currentPassword || currentPassword ? "focused" : ""
              }`}
            >
              <input
                id="current-password"
                type="password"
                value={currentPassword}
                onFocus={() =>
                  setFocused({ ...focused, currentPassword: true })
                }
                onBlur={() =>
                  setFocused({
                    ...focused,
                    currentPassword: currentPassword.length > 0,
                  })
                }
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <label htmlFor="current-password">Текущий пароль*</label>
            </div>
            <div
              className={`form-group ${
                focused.newPassword || newPassword ? "focused" : ""
              }`}
            >
              <input
                id="new-password"
                type="password"
                value={newPassword}
                onFocus={() => setFocused({ ...focused, newPassword: true })}
                onBlur={() =>
                  setFocused({
                    ...focused,
                    newPassword: newPassword.length > 0,
                  })
                }
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <label htmlFor="newPassword">Новый пароль*</label>
            </div>
            <div
              className={`form-group ${
                focused.confirmPassword || confirmPassword ? "focused" : ""
              }`}
            >
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onFocus={() =>
                  setFocused({ ...focused, confirmPassword: true })
                }
                onBlur={() =>
                  setFocused({
                    ...focused,
                    confirmPassword: confirmPassword.length > 0,
                  })
                }
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label htmlFor="confirmPassword">Подтвердите пароль* </label>
            </div>
            <button type="submit">Изменить</button>
          </form>
        </div>
      </div>

      {/* obnovit parol */}

      {/* Add more sections as needed */}
    </div>
  );
};

export default PasswordUpdateForm;
