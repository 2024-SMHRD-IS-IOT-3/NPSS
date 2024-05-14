import React from 'react'
import { Form, Button } from 'react-bootstrap'
// import axios from '../axios'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
        <div>
        <Link to="/"><img className="logo1" src='img/NPSS_logo1.png' alt='이미지 준비중...'/></Link>
        </div>

        <div>
            <h2>저희의 서비스를 소개합니다! </h2>
        </div>
        
        <br/><br/><br/><br/><br/><br/><br/>
        <div className="button-container-2">
            <button onClick={()=>{window.location.href="/introduce"}}>기업소개</button>  
        </div>
        <div className="button-container-2">
            <button onClick={()=>{window.location.href="/join"}}>회원가입</button>  
        </div>
        <div className="button-container-2">
            <button onClick={()=>{window.location.href="/login"}}>로그인</button>  
        </div>

    </div>
  )
}

export default Main