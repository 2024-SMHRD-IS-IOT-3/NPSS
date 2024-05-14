import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import axios from '../axios'
import { Link } from 'react-router-dom';
// import AccordionMenu from './AccordionMenu';

const Login = () => {

    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const handleLogin = (e) =>{
        e.preventDefault();
        console.log('handle Login function');
    }


  return (
    <div>
        <div>
        <Link to="/"><img className="logo2" src='img/NPSS_logo2.png' alt='이미지 준비중...'/></Link>
        </div>
        {/* <AccordionMenu/> */}
        <h4>로그인</h4>

        <div className='formBox'>
            <form className="formTag" onSubmit={handleLogin}>
                <span>ID</span> <br/>
                <input type="text" name="ID" placeholder='아이디를 입력하세요.' onChange={(e)=>{setId(e.target.value)}}/>
                <br/>
                <span>Password</span> <br/>
                <input type="password" name="PW" placeholder='비밀번호를 입력하세요.' onChange={(e)=>{setPw(e.target.value)}}/>


                <div className="button-container">
                    <button type="submit" className="btn">로그인</button>
                </div>
            </form>
            <div className="button-container-onclick">
                    <button onClick={()=>{window.location.href="/"}}>메인으로</button>  
            </div>
        </div>

    </div>
  )
}

export default Login