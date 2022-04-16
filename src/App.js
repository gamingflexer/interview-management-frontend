import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/head/Header";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/mainApp/Home";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Home />}></Route>
          <Route exact path={"/abc"} element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}
