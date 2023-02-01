import React, { useEffect } from "react";
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

    const markerImageUrl = process.env.PUBLIC_URL + `/assets/markerImage.png`,
      markerImageSize = new kakao.maps.Size(40, 42), // 마커 이미지의 크기
      markerImageOptions = {
        offset: new kakao.maps.Point(20, 42), // 마커 좌표에 일치시킬 이미지 안의 좌표
      };

    // 마커 이미지를 생성한다
    const markerImage = new kakao.maps.MarkerImage(
      markerImageUrl,
      markerImageSize,
      markerImageOptions
    );

    const state = dataSet.filter((it) => it.BSN_STATE_NM === "영업중"); //영업중인 병원

    const marker = state.map((it) => {
      return new kakao.maps.Marker({
        position: new kakao.maps.LatLng(
          `${it.REFINE_WGS84_LAT}`,
          `${it.REFINE_WGS84_LOGT}`
        ), // 마커의 좌표
        map: map,
      });
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
