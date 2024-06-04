import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Profile from "../pages/Profile";
import Chats from "../pages/Chats";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/chats" element={<Chats />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
