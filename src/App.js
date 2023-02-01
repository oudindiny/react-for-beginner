import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Kakao from "./components/Kakao";
import axios from "axios";
import XMLParser from "react-xml-parser";

function App() {
  const parseStr = (dataSet) => {
    const dataArr = new XMLParser().parseFromString(dataSet).children;
    console.log(dataArr);
  };

  async function getAPI() {
    await axios({
      method: "get",
      url: `https://apis.data.go.kr/B552657/HsptlAsembySearchService/getHsptlMdcncFullDown?serviceKey=xiUcwyft%2BKShrmmbHwBgGx9s1snBLY5ql3SmlbjqVOU5zvnCTo6bPY%2Bk2dTTOH%2BRQrQztGESdXcqF7Y3LjlOPw%3D%3D&pageNo=1&numOfRows=10`,
    }).then(function(response) {
      const dataSet = response.data;
      parseStr(dataSet);
    });
  }

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
