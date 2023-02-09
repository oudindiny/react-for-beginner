import React, { useState } from "react";

const Old = () => {
  const [tel, setTel] = useState("");

  //tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

  return (
    <div className="Old">
      <div className="left">
        <div className="tel_box">{tel}</div>
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
        </div>
      </div>
    </div>
  );
};
export default Old;
