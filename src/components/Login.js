import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>ID</label>
                <input type="text" value={id} onChange={onIdHandler}/>
                <label>PW</label>
                <input type="text" value={pw} onChange={onPwHandler}/>
                <button type='sudmit'>
                    로그인
                </button>
                
            </form>
            <button  onClick={aaa}>
                    박하민이 잘못했다...
                </button>
        </div>
    );
}

export default Login;