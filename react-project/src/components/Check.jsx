import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import axios from '../axios'
import { Link } from 'react-router-dom';

const Check = () => {
    // 어떤 서비스 가입할지, 결제, 점포 정보 입력 (사업자등록증 확인)
    // 로그인 복붙해옴 함수 고쳐야함

    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const [license, setLicense] = useState();
    const [pay, setPay] = useState('');

    const handleCheck = (e) =>{
        e.preventDefault();
        console.log('handle Check function');
    }


  return (
    <div>
        <div>
            <Link to="/"><img className="logo2" src='img/NPSS_logo2.png' alt='이미지 준비중...'/></Link>
        </div>

         <div className='formBox'>
            <Form onSubmit={handleCheck}>
                <h4>사업자 등록 번호 입력</h4>
                <Form.Group className="mb-3" controlId="formBasicID">
                    <Form.Label>사업자등록번호</Form.Label>
                    <Form.Control type="text" placeholder="Enter license" 
                                onChange={(e)=>{setLicense(e.target.value)}}
                    /><br/>
                     <Button variant="outline-secondary">확인</Button>{' '}
                </Form.Group>
                <br /><br />
                <h4>이용하실 서비스를 선택해주세요.</h4>
                <div key={"SystemCheck"} className="mb-3">
                    <input type="checkbox" name="system" value="1"/>태양열 발전 + 냉난방 제어<br/>
                    <input type="checkbox" name="system" value="2"/>태양열 발전 + 간판/조명 제어<br/>
                    <input type="checkbox" name="system" value="all"/>모든 서비스 이용<br/>
                </div>
                   
                <br />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>결제정보 입력</Form.Label>
                    <Form.Control type="password" placeholder="카드 번호 입력"
                                onChange={(e)=>{setPay(e.target.value)}}
                    />
                </Form.Group>
                <br />
                <Button variant="outline-secondary">
                    <Link to="/">메인으로 돌아가기</Link>
                </Button>{' '}
                <Button variant="outline-secondary">
                    <Link to='/join'>회원가입</Link>
                </Button>{' '}
                <Button variant="outline-secondary">
                <Link to='/login'>로그인</Link>    
                </Button>{' '}
            </Form>
        </div>


    </div>
  )
}

export default Check