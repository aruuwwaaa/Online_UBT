// GradesTable.jsx
import React from "react";
import QuestionsForm from "../QuestionsForm/QuestionsForm"; // If the file is QuestionsForm.jsx
import "./SubjectAnalysisForm.css"; // Make sure to create a corresponding CSS file for styling

const GradesTable = () => {
  // Replace with your actual data source
  const gradesData = [
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    {
      id: 1231,
      name: "Улдана",
      surname: "Адильбек",
      class: "11Ф",
      avgGrade: "23/50",
      exam1: "23/50",
      exam2: "23/50",
    },
    // ... more data
  ];

  return (
    <div>
      <div className="title">
        <h1 className="text-lg font-bold mb-4">Анализ предмета</h1>
      </div>
      <div className="grades-table-container">
        <h2>Оценка по предметам</h2>
        <table className="grades-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Класс</th>
              <th>Средний балл</th>
              <th>Результаты 1 экзамена</th>
              <th>Результаты 2 экзамена</th>
            </tr>
          </thead>
          <tbody>
            {gradesData.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.surname}</td>
                <td>{data.class}</td>
                <td>{data.avgGrade}</td>
                <td>{data.exam1}</td>
                <td>{data.exam2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GradesTable;
