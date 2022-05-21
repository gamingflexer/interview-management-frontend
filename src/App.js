import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CandidateInfo, Home, LandingPage, TryOut } from "./pages";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path={"/"} element={<LandingPage />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route path={"/try"} element={<TryOut />} />
          <Route path={"/candidate/:userId"} element={<CandidateInfo />} />
        </Routes>
      </Router>
    </>
  );
}
