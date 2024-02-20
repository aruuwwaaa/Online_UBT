import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FilterForm.css";

function RoleSelectionForm() {
  const [role, setRole] = useState("");
  const navigate = useNavigate(); // Instantiate the navigation function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(role); // You can perform actions based on the selected role here

    // Navigate to the login page after form submission
    navigate("/login");
  };
  <submit className="on">
    Role
    <Selection-Form></Selection-Form>
  </submit>;

  return (
    <div className="role-selection-container">
      <h2>Кто вы?</h2>
      <p>Добро пожаловать!</p>
      <form onSubmit={handleSubmit}>
        <div className="role-selection">
          <input
            type="radio"
            id="student"
            name="role"
            value="student"
            checked={role === "student"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="student">Ученик</label>

          <input
            type="radio"
            id="teacher"
            name="role"
            value="teacher"
            checked={role === "teacher"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="teacher">Учитель</label>

          <input
            type="radio"
            id="admin"
            name="role"
            value="admin"
            checked={role === "admin"}
            onChange={(e) => setRole(e.target.value)}
          />
          <label htmlFor="admin">Админ</label>
        </div>
        <button type="submit" className="filter-button">
          Войти
        </button>
      </form>
    </div>
  );
}

export default RoleSelectionForm;
