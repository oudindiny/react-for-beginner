import React from "react";
import Kakao from "./Kakao";

const Form = () => {
  return (
    <div className="Form">
      <form>
        <p>이름</p>
        <input></input>
        <p>전화번호</p>
        <input></input>
        <p>위치</p>
        <Kakao />
        <button>신청하기</button>
      </form>
    </div>
  );
};
export default Form;
