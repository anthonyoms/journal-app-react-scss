import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JournalScreen />} />
        <Route path="auth/*" element={<AuthRouter />} />
      </Routes>
    </Router>
  );
};
