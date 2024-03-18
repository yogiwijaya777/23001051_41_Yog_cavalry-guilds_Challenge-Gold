import React from "react";
import Home from './App';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  
import Login from './pages/auth/login'
import Signup from "./pages/auth/signup";

export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    );
  }