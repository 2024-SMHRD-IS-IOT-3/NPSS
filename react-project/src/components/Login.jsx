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

                <div className="button-container">
                    <button type="submit" className="btn">로그인</button>
                </div>
            </Form>
            <div className="button-container">
                    <button onClick={()=>{window.location.href="/"}}>메인으로</button>  
            </div>
        </div>

    </div>
  )
}

export default Login