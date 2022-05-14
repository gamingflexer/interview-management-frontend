import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/head/Header";
import ApplicationForm from "./components/mainApp/candidate/ApplicationForm";
import Home from "./components/mainApp/Home";
import ViewReport from "./components/mainApp/pages/ViewReport";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Header />}></Route>
          <Route exact path={"/home"} element={<Home />}></Route>
          <Route
            exact
            path={"/viewreport/:candidateId"}
            element={<ViewReport />}
          ></Route>
          <Route exact path={"/apply"} element={<ApplicationForm />}></Route>
        </Routes>
      </Router>
    </>
  );
}
