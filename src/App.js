import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import New from "./pages/New";
import NaverMap from "./components/NaverMap";

import "./App.css";
import MainPage from "./pages/MainPage";
import Old from "./pages/Old";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<New />} />
          <Route path="/old" element={<Old />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
