import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

import NaverMap from "./components/NaverMap";

import "./App.css";
import MainPage from "./pages/MainPage";
import New from "./pages/New";
import Old from "./pages/Old";
import Admin from "./pages/Admin";
import Kakao from "./components/Kakao";
import Data from "./components/Data";
import OldSecond from "./pages/OldSecond";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<New />} />
          <Route path="/old" element={<OldSecond />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
