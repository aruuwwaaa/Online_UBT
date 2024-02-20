import React, { useState } from "react";
import Profile from "../ProfileForm/ProfileForm";
import PasswordUpdateForm from "../UpdatePasswordForm/UpdatePassword";
import accountCircleImg from "../../assets/imgs/account_circle.png";
import passwordImg from "../../assets/imgs/password.jpg";
import navigationImg1 from "../../assets/imgs/navigation.png";
import navigationImg2 from "../../assets/imgs/navigation.png";
import "./GeneralProfile.css";

const GeneralProfile = () => {
  const [activeSection, setActiveSection] = useState("personalInfo");
  const userInfo = {
    fullName: "Алишер Алтынбеков",
    email: "allisheraltynbekov@gmail.com",
    iin: "1111 2222 3333",
    class: "11",
    letter: "Ф",
    subject: "Subject Placeholder", // Placeholder for the subject, replace with actual data
  };

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
    <div className="general">
      <nav>
        <div className="nav1">
          <button onClick={() => setActiveSection("personalInfo")}>
            <img src={accountCircleImg} />
            <p>Персональная информация</p>
            <img src={navigationImg1} />
          </button>
        </div>
        <div className="nav2">
          <button onClick={() => setActiveSection("updatePassword")}>
            <img src={passwordImg} />
            Обновить пароль
            <img src={navigationImg2} />
          </button>
        </div>
      </nav>

      {activeSection === "personalInfo" && (
        <div>
          <div className="personal-info-container">
            <div className="header">
              <p className="personal-info-header">Персональная информация</p>
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
        </div>
      )}

      {activeSection === "updatePassword" && (
        <div className="updatePasswordGeneral">
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
                    onFocus={() =>
                      setFocused({ ...focused, newPassword: true })
                    }
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
        </div>
      )}
    </div>
  );
};

export default GeneralProfile;
