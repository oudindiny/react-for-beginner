import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
//스타일
const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10%;
    width: 50%;

`
const Label = styled.p`
    size: 10px;
`
const Input = styled.input`
    width: 250px;
    border-color: lightblue;
    height: 30px;
`
const LoginButton = styled.button`
    margin: 15px;
    width: 200px;
    height: 30px;
`



function Login() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
    const navigate = useNavigate();
    
    
    const onSubmitHandler = (e) =>{
        
        if(id === "yujin" && pw === "1234"){
            
            console.log("로그인 성공했습니다!");
            navigate("/");
        }
        else{
            alert("로그인 실패");
            console.log("로그인 실패!");
        }

        console.log('id', id);
        console.log('pw', pw);
    }

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
        console.log(id);
    }
    const onPwHandler = (e) =>{
        setPw(e.currentTarget.value);
    }
    

    const aaa = async(e) => {
        const res = await axios.get("http://192.168.219.122:8800/in");
        console.log(res);
        console.log(1);
    }

    return (
        <MainDiv>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <Label>ID</Label>
                    <Input type="text" value={id} onChange={onIdHandler}/>
                    <Label>PW</Label>
                    <Input type="password" value={pw} onChange={onPwHandler}/>
                </div>
                
                <LoginButton type='sudmit'>
                    로그인
                </LoginButton>
                
            </form>
            <LoginButton  onClick={aaa}>
                    aaa
                </LoginButton>
        </MainDiv>
    );
}

export default Login;