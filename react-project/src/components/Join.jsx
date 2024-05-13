import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import axios from '../axios'
import { Link } from 'react-router-dom';
import AccordionMenu from './AccordionMenu';

const Join = () => {

  const [id, setId] = useState(""); 
  const [pw, setPw] = useState(""); 
  const [checkPw, setCheckPw] = useState("");
  const [email, setEmail] = useState("");

  const handleJoin = (e)=>{
    e.preventDefault();
    console.log('handle join function');
  }

  return (
    <div>
        <div className='header'>
          <Link to="/"><img className="logo2" src='img/NPSS_logo2.png' alt='이미지 준비중...'/></Link>
        </div>
        <AccordionMenu/>

        <h4>회원가입</h4>
        <div className='formBox'>
            <Form onSubmit={handleJoin}>
                <Form.Group className="mb-3" controlId="formBasicID">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control type="text" placeholder="Enter ID"
                                onChange={(e)=>{setId(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                                onChange={(e)=>{setPw(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호 확인</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                                onChange={(e)=>{setCheckPw(e.target.value)}}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>이메일 주소</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>

                </Form.Group>
            
                <div className="d-grid gap-2">
                    <Button variant="outline-secondary" type="submit">
                    회원가입
                    </Button>
                    <Button variant="outline-secondary">
                      <Link to="/">메인으로</Link>
                    </Button>{' '}
                </div>
            </Form>
      </div>

    </div>
  )
}

export default Join