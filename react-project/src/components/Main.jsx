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
        <Button variant="outline-secondary">
            <Link to="/introduce">기업 소개</Link>
        </Button>{' '}
        <Button variant="outline-secondary">
            <Link to="/join">회원가입</Link>
        </Button>{' '}
        <Button variant="outline-secondary">
            <Link to="/login">로그인</Link>
        </Button>{' '}

    </div>
  )
}

export default Main