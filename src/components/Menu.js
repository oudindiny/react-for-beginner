import React, { useState } from "react";
import dataSet from "./../dataSet.json";

const Menu = () => {
  const [data, setData] = useState();
  //   const info = dataSet.filter((it) => it.SIGUN_NM === "가평군");
  //   console.log(info);
  const state = dataSet.filter((it) => it.BSN_STATE_NM === "영업중"); //영업중인 병원

  return <div></div>;
};

export default Menu;
