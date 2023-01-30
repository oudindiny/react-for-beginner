import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Detail from "./routes/Detail";
import Home from "./components/Home";
import Kakao from "./components/Kakao";

function App() {
  return (
    <div>
      <Kakao />
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
