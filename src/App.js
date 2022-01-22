import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TaskBody from "./Components/Tasks";
import Login from "./Components/Login";
import ErrorPage from './Components/Error 404'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/todolist" element={<TaskBody />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
