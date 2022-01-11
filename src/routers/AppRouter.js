import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebase-config";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { login } from "../actions/auth";
import { startLoadingNotes } from "../actions/notes";
export const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isloggedIn, setIsloggedIn] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsloggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsloggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsloggedIn]);

  if (checking) {
    return <h1>Wait...</h1>;
  }
  return (
    <Router>
      <Routes>
        {isloggedIn ? (
          <>
            <Route path="/" element={<JournalScreen />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="auth/*" element={<AuthRouter />} />
            <Route path="*" element={<Navigate to="/auth/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};
