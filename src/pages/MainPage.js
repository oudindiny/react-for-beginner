import React from "react";

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="top"></div>

      <div className="mid">
        <div className="left">
          <p className="color_grey">
            어서오세요 <p className="color_blue">접수</p> 도와드리겠습니다.
          </p>
          <img src="assets/hospital.png" />
        </div>

        <div className="right">
          <button className="main_button">
            <img src="assets/mainButtonImage1.png" />
            <p>저희 병원에 처음 방문하셨나요?</p>
            <p className="main_text">초진 접수</p>
          </button>
          <button className="main_button">
            <img src="assets/mainButtonImage2.png" />
            <p>저희 병원에 오신 적 있으신가요?</p>
            <p className="main_text">재진 접수</p>
          </button>
        </div>
      </div>

      <div className="bottom"></div>
    </div>
  );
};

export default MainPage;
