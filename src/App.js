import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/head/Header";
import ApplicationForm from "./components/mainApp/candidate/ApplicationForm";
import { CandidateInfo, Home } from "./components/mainApp/pages";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Header />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path={"/apply"} element={<ApplicationForm />} />
          <Route path={"/candidate/:userId"} element={<CandidateInfo />} />
        </Routes>
      </Router>
    </>
  );
}
