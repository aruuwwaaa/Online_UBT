import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import EditSectionForm from "../EditSectionForm/EditSectionForm";
import accountCircleImg from "../../assets/imgs/account_circle.png";
import passwordImg from "../../assets/imgs/password.jpg";
import navigationImg1 from "../../assets/imgs/navigation.png";
import navigationImg2 from "../../assets/imgs/navigation.png";
import EditImg from "../../assets/imgs/EditImg.png";
import { EditFilled } from "@ant-design/icons";

export const account = () => {
  return (
    <div className="container-1">
      <h1>Профиль</h1>
    </div>
  );
};

function UserProfile() {
  // Replace the static values with actual user data where needed
  const userInfo = {
    fullName: "Алишер Алтынбеков",
    email: "allisheraltynbekov@gmail.com",
    iin: "1111 2222 3333",
    class: "11",
    letter: "Ф",
    subject: "Subject Placeholder", // Placeholder for the subject, replace with actual data
  };
  const [isEditing, setIsEditing] = useState(false);

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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    // Implement save logic
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="profile-form2">
          <h2>Обновить профиль</h2>
          <form onSubmit={handleSubmit} className="password-update-form2">
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
              <label htmlFor="current-password">Имя*</label>
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
              <label htmlFor="newPassword">Фамилия*</label>
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
              <label htmlFor="confirmPassword">Почта* </label>
            </div>
            <button type="submit">Изменить</button>
          </form>
        </div>
      ) : null}
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

        <div className="personal-info-container">
          <div className="header">
            <p className="personal-info-header">Персональная информация</p>
            <button onClick={handleEditClick} className="edit-button">
              <img src={EditImg} />
            </button>
          </div>

          <div className="personal-info-grid">
            <div className="info-box">
              <div className="info-label">Имя-фамилия</div>
              <div className="info-value">Алишер Алтынбеков</div>
            </div>
            <div className="info-box">
              <div className="info-label">Почта</div>
              <div className="info-value">allisheraltnynbekov@gmail.com</div>
            </div>
            <div className="info-box">
              <div className="info-label">ИИН</div>
              <div className="info-value">1111 2222 3333</div>
            </div>
            <div className="info-box">
              <div className="info-label">Класс</div>
              <div className="info-value">11</div>
            </div>
            <div className="info-box">
              <div className="info-label">Литерал</div>
              <div className="info-value">Ф</div>
            </div>
            <div className="info-box">
              <div className="info-label">Предмет</div>
              <div className="info-value">Subject Placeholder</div>
            </div>
          </div>
        </div>

        {/* obnovit parol */}

        {/* Add more sections as needed */}
      </div>
    </div>
  );
}

export default UserProfile;

// export default account;
