import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 400px;
  height: 100px;
`;

const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Number = styled.div`
  background-color: aqua;
  align-items: center;
  text-align: center;
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const OldSecond = () => {
  const [num, setNum] = useState([]);

  const clickHandler = (e) => {
    setNum(num + e.target.innerHTML);
  };

  useEffect(() => {
    console.log(num);
    if (num.length === 11) {
      setNum(num.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`));
      console.log(num.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`));
    } else if (num.length > 13) {
      alert("전화번호 오류!");
      setNum("");
    }
  }, [num]);

  return (
    <Wrap>
      <Input>{num}</Input>
      <Container>
        <Row>
          <Number onClick={clickHandler}>1</Number>
          <Number onClick={clickHandler}>2</Number>
          <Number onClick={clickHandler}>3</Number>
        </Row>
        <Row>
          <Number onClick={clickHandler}>4</Number>
          <Number onClick={clickHandler}>5</Number>
          <Number onClick={clickHandler}>6</Number>
        </Row>
        <Row>
          <Number onClick={clickHandler}>7</Number>
          <Number onClick={clickHandler}>8</Number>
          <Number onClick={clickHandler}>9</Number>
        </Row>
        <Row>
          <Number onClick={clickHandler}>0</Number>
        </Row>
      </Container>
    </Wrap>
  );
};

export default OldSecond;
