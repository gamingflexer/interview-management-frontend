import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/head/Header";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/mainApp/Home";
import ViewReport from "./components/mainApp/pages/ViewReport";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Header />}></Route>
          <Route exact path={"/home"} element={<Home />}></Route>
          <Route exact path={"/viewreport"} element={<ViewReport />}></Route>
        </Routes>
      </Router>
    </>
  );
}
