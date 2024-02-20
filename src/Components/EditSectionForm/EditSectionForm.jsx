import React, { useState } from "react";
import "./EditSectionForm.css";
import ProfileForm from "../../Components/ProfileForm/ProfileForm";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

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
    <div className="profile-container">
      <div className="profile-header">
        <h1>Персональная информация</h1>
        <button onClick={handleEditClick} className="edit-button">
          <img src="edit-icon.png" alt="Edit" /> {/* Replace with your icon */}
        </button>
      </div>

      {isEditing ? (
        <div className="profile-form">
          <h2>Обновить профиль</h2>
          <form onSubmit={handleSubmit} className="form">
            {/* Replace input names and values with your state-controlled variables */}
            <label>
              Имя*
              <input type="text" name="firstName" />
            </label>
            <label>
              Фамилия*
              <input type="text" name="lastName" />
            </label>
            <label>
              Почта
              <input type="email" name="email" />
            </label>
            {/* Add other fields as necessary */}
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default Profile;
