import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Kakao from "./components/Kakao";
import Form from "./components/Form";
import Menu from "./components/Menu";
import axios from "axios";
import XMLParser from "react-xml-parser";
import "./App.css";

function App() {
  return (
    <div>
      <Home />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
