import React, { useState } from "react";

const Old = () => {
  const [tel, setTel] = useState();
  const handleTel = (e) => {
    setTel(e.target.value);
  };
  return (
    <div className="Old">
      <div className="left">{tel}</div>
      <div className="right">
        <button className="tel_number top" value="1">
          1
        </button>
        <button className="tel_number top" value="2">
          2
        </button>
        <button className="tel_number top" value="3">
          3
        </button>
        <button className="tel_number mid" value="4">
          4
        </button>
        <button className="tel_number mid" value="5">
          5
        </button>
        <button className="tel_number mid" value="6">
          6
        </button>
        <button className="tel_number bottom" value="7">
          7
        </button>
        <button className="tel_number bottom" value="8">
          8
        </button>
        <button className="tel_number bottom" value="9">
          9
        </button>
        <button className="tel_number last" value="0">
          0
        </button>
      </div>
    </div>
  );
};
export default Old;
