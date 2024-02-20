import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import FilterForm from "./Components/FilterForm/FilterForm";
import ProfileForm from "./Components/ProfileForm/ProfileForm";
import QuestionsForm from "./Components/QuestionsForm/QuestionsForm";
import SubjectAnalysisForm from "./Components/SubjectAnalysisForm/SubjectAnaysisForm";
import EditSectionForm from "./Components/EditSectionForm/EditSectionForm";
import UpdatePasswordForm from "./Components/UpdatePasswordForm/UpdatePassword";
import GeneralProfile from "./Components/GeneralProfile/GeneralProfile";
import ExamAnalysis from "./Components/AnalysisExam/AnalysisExam";
import ModalPopup from "./Components/ModalForm/Modal";

function App() {
  return (
    <div className="App">
      {/* <ModalPopup /> */}
      <ExamAnalysis />
      {/* <GeneralProfile /> */}
      {/* <UpdatePasswordForm /> */}
      {/* <SubjectAnalysisForm /> */}
      {/* <QuestionsForm /> */}
      {/* <FilterForm /> */}
      {/* <LoginForm /> */}
      {/* <ProfileForm /> */}
    </div>
  );
}
export default App;
