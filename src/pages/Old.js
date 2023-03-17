import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Old = () => {
  const [tel, setTel] = useState([]);

  useEffect(() => {
    console.log(tel);
  }, [tel]);

  return (
    <div className="Old">
      <div className="left">
        <p>전화번호를 입력해주세요 </p>
        <div className="tel_box">
          <p>{tel}</p>
        </div>
      </div>
      <div className="right">
        <div>
          <button
            className="tel_number"
            value="1"
            onClick={() => setTel(tel + "1")}
          >
            1
          </button>
          <button
            className="tel_number"
            value="2"
            onClick={() => setTel(tel + "2")}
          >
            2
          </button>
          <button
            className="tel_number"
            value="3"
            onClick={() => setTel(tel + "3")}
          >
            3
          </button>
        </div>
        <div>
          <button
            className="tel_number"
            value="4"
            onClick={() => setTel(tel + "4")}
          >
            4
          </button>
          <button
            className="tel_number"
            value="5"
            onClick={() => setTel(tel + "5")}
          >
            5
          </button>
          <button
            className="tel_number"
            value="6"
            onClick={() => setTel(tel + "6")}
          >
            6
          </button>
        </div>
        <div>
          <button
            className="tel_number"
            value="7"
            onClick={() => setTel(tel + "7")}
          >
            7
          </button>
          <button
            className="tel_number"
            value="8"
            onClick={() => setTel(tel + "8")}
          >
            8
          </button>
          <button
            className="tel_number"
            value="9"
            onClick={() => setTel(tel + "9")}
          >
            9
          </button>
        </div>
        <div>
          <button
            className="tel_number"
            value="0"
            onClick={() => setTel(tel + "0")}
          >
            0
          </button>
          <button className="nextButton">
            <span>다음</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Old;
