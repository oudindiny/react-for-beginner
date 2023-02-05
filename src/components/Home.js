import React, { useEffect, useState } from "react";
import dataSet from "./../dataSet.json";

const { kakao } = window;

const Home = () => {
  //영업중인 병원
  const state = dataSet.filter((it) => it.BSN_STATE_NM === "영업중");
  // 병원정보
  const hos_name = state[0].BIZPLC_NM;
  const hos_addr = state[0].REFINE_ROADNM_ADDR;
  const hos_tel = state[0].LOCPLC_FACLT_TELNO_DTLS;

  useEffect(() => {
    const container = document.getElementById("map");

    // 위도 경도
    const lat = state[0].REFINE_WGS84_LAT;
    const logt = state[0].REFINE_WGS84_LOGT;

    const options = {
      center: new kakao.maps.LatLng(lat, logt),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, logt), // 마커의 좌표
      map: map,
      clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });
  }, []);

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
    <div className="Home">
      <div>
        <p>{hos_name}</p>
        <p>{hos_addr}</p>
        <p>{hos_tel}</p>
        <p>영업시간</p>
      </div>
      <div
        id="map"
        style={{
          width: "500px",
          height: "350px",
        }}
      ></div>
    </div>
  );
};
export default Home;
