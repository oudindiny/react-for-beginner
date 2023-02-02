import React, { useEffect, useState } from "react";
import dataSet from "./../dataSet.json";

const { kakao } = window;

const Kakao = () => {
  useEffect(() => {
    const container = document.getElementById("map");

    const options = {
      center: new kakao.maps.LatLng(37.56682, 126.97865),
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

    const content = '<div className="content">content</div>';
    const removeable = true;

    const infowindow = new kakao.maps.InfoWindow({
      content: content,
      removable: removeable,
    });
    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function() {
      // 마커 위에 인포윈도우를 표시합니다
      infowindow.open(map, marker);
    });
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
