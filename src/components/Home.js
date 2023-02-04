import React, { useEffect, useState } from "react";
import dataSet from "./../dataSet.json";

const { kakao } = window;

const Home = () => {
  useEffect(() => {
    const container = document.getElementById("map");

    const state = dataSet.filter((it) => it.BSN_STATE_NM === "영업중"); //영업중인 병원

    const main = state.filter((it) => {
      const lat = `${it.REFINE_WGS84_LAT[0]}`;
      const logt = `${it.REFINE_WGS84_LOGT[0]}`;

      console.log(lat, logt);
      const options = {
        center: new kakao.maps.LatLng(
          `${it.REFINE_WGS84_LAT[0]}`,
          `${it.REFINE_WGS84_LOGT[0]}`
        ),
        level: 10,
      };
      const map = new kakao.maps.Map(container, options);

      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(
          `${it.REFINE_WGS84_LAT[0]}`,
          `${it.REFINE_WGS84_LOGT[0]}`
        ), // 마커의 좌표
        map: map,
        clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
      });
    });
  });
  // const options = {
  //   center: new kakao.maps.LatLng(37.56682, 126.97865),
  //   level: 10,
  // };
  // const map = new kakao.maps.Map(container, options);

  // const marker = state.map((it) => {
  //   return new kakao.maps.Marker({
  //     position: new kakao.maps.LatLng(
  //       `${it.REFINE_WGS84_LAT[0]}`,
  //       `${it.REFINE_WGS84_LOGT[0]}`
  //     ), // 마커의 좌표
  //     map: map,
  //     clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
  //   });
  // });

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
export default Home;
