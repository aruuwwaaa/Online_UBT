import React from "react";
import "./QuestonsForm.css";

// The main component for the page
const QuestionDatabase = () => {
  // This could be fetched from an API or passed as props
  const topics = [
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    {
      id: 1,
      name: "Алгоритм > Основные свойства алгоритма",
      onePointQuestions: 45,
      twoPointsQuestions: 45,
    },
    // ... other topics
  ];

  return (
    <div>
      <div className="title">
        <h1 className="text-lg font-bold mb-4">База вопросов</h1>
      </div>
      <div className="app-container">
        <div className="main-content">
          <table className="min-w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Название темы</th>
                <th>Вопросы 1 балл</th>
                <th>Вопросы 2 балла</th>
                <th>Добавить</th>
              </tr>
            </thead>
            <tbody>
              {topics.map((topic, index) => (
                <tr key={topic.id}>
                  <td>{index + 1}</td>
                  <td>{topic.name}</td>
                  <td>{topic.onePointQuestions}</td>
                  <td>{topic.twoPointsQuestions}</td>
                  <td>
                    <button className="add-question-btn">+</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuestionDatabase;
