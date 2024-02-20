// ExamAnalysis.js
import React, { useState } from "react";
import "./AnalysisExam.css";
import "../../assets/imgs/search-icon.png";
import "../../assets/imgs/close-icon.png";
import { DatePicker } from "antd";

const ExamAnalysis = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const exams = [
    {
      id: 1,
      nameKazakh: "Innoverse мектебі",
      nameRussian: "Innoverse школа",
      nameEnglish: "Innoverse school",
      timeLeft: "9 часов, 22 минуты",
      startDate: "1 Нояб. 2023, 12:44",
      endDate: "30 Нояб. 2023, 12:44",
      participants: 107,
    },
  ];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredExams = exams.filter((exam) =>
    exam.nameEnglish.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="container">
      <div className="first-container">
        <h3>Экзамены</h3>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Поиск"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {/* <button class="close-icon"></button> */}
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Название на казахском языке</th>
            <th>Название на русском языке</th>
            <th>Название на английском языке</th>
            <th>Осталось</th>
            <th>Дата начала</th>
            <th>Дата окончания</th>
            <th>Сдавших</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {filteredExams.map((exam) => (
            <tr key={exam.id}>
              <td>{exam.nameKazakh}</td>
              <td>{exam.nameRussian}</td>
              <td>{exam.nameEnglish}</td>
              <td>{exam.timeLeft}</td>
              <td>{exam.startDate}</td>
              <td>{exam.endDate}</td>
              <td>{exam.participants}</td>
              <td>{/* Icons or buttons for actions */}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={openModal} className="createButton">
        Создать экзамен
      </button>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <div className="modal-main">
              <h2>Создать экзамен</h2>
              <form onSubmit={handleSubmit} className="form">
                <DatePicker
                  placeholder="Начало дата/время*"
                  onChange={onChange}
                  picker="day"
                />
                <DatePicker
                  placeholder="Начало дата/время*"
                  onChange={onChange}
                  picker="day"
                />
              </form>

              <h2>Тип вопросов</h2>
              <label>
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                Рандомные вопросы
              </label>

              <label>
                <input
                  type="radio"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                Последние вопросы
              </label>

              <div className="buttons">
                <button className="cancelButton">Отмена</button>
                <button onClick={closeModal} className="saveButton">
                  Сохранить
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ExamAnalysis;
