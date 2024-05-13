import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import axios from '../axios'
import { Link } from 'react-router-dom';
import AccordionMenu from './AccordionMenu';

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
        <AccordionMenu/>
        <h4>로그인</h4>

        <div className='formBox'>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicID">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter id" 
                                onChange={(e)=>{setId(e.target.value)}}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                                onChange={(e)=>{setPw(e.target.value)}}
                    />
                </Form.Group>

                <div className="d-grid gap-2">
                    <Button variant="outline-secondary" type="submit">
                    로그인
                    </Button>
                    <Button variant="outline-secondary">
                        <Link to="/join">회원가입</Link>
                    </Button>{' '}
                </div>
            </Form>
        </div>

    </div>
  )
}

export default Login