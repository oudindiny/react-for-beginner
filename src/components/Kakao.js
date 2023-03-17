import React, { useEffect, useState } from "react";
import dataSet from "./../dataSet.json";

const { kakao } = window;

const Kakao = () => {
  useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new kakao.maps.LatLng(37.5031495814, 126.7817606485),
      level: 10,
    };
    const map = new kakao.maps.Map(container, options);

    const state = dataSet.filter((it) => it.BSN_STATE_NM === "영업중"); //영업중인 병원

    const marker = state.map((it) => {
      return new kakao.maps.Marker({
        position: new kakao.maps.LatLng(
          `${it.REFINE_WGS84_LAT}`,
          `${it.REFINE_WGS84_LOGT}`
        ), // 마커의 좌표
        map: map,
        clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
      });
    });

    const hos1 = state.map((it) => it.TREAT_SBJECT_CONT.split(" "));
    console.log(hos1);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "500px",
        height: "400px",
      }}
    ></div>
  );
};
export default Kakao;
