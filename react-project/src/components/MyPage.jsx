import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
// import axios from '../axios'
import { Link } from 'react-router-dom';
import AccordionMenu from './AccordionMenu';

const MyPage = () => {
    // 정보수정 페이지
    // 1. 비번 확인 해서 정보 수정할 수 있도록.
    
    const [pw, setPw] = useState(''); 
    const [checkPw, setCheckPw] = useState("");
    const [pay, setPay] = useState('');

    const handleMyPage = (e)=>{
        e.preventDefault();
        console.log('handle MyPage function');
      }

    useEffect(()=>{
        console.log("useEffect 실행");

    })
    

  return (
    <div>
        <div>
            <Link to="/"><img className="logo2" src='img/NPSS_logo2.png' alt='이미지 준비중...'/></Link>
        </div>
        <AccordionMenu/>
        <h4>정보 수정</h4>

        <div className='formBox'>
            <Form onSubmit={handleMyPage}>
                <div>
                    <h4>비밀번호 변경</h4>
                    <Form.Group className="mb-3" controlId="formBasicID">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="text" placeholder="Enter id" 
                                    onChange={(e)=>{setPw(e.target.value)}}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>비밀번호 확인</Form.Label>
                        <Form.Control type="password" placeholder="Password"
                                    onChange={(e)=>{setCheckPw(e.target.value)}}/>
                    </Form.Group>
                </div>
                <div>
                    <h4>변경하실 서비스를 선택해주세요.</h4>
                    <div key="SystemCheck" className="mb-3">
                        <input type="checkbox" name="system" value="1"/>태양열 발전 + 냉난방 제어<br/>
                        <input type="checkbox" name="system" value="2"/>태양열 발전 + 간판/조명 제어<br/>
                        <input type="checkbox" name="system" value="all"/>모든 서비스 이용<br/>
                    </div>
                </div>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>결제정보 수정</Form.Label>
                    <Form.Control type="password" placeholder="카드 번호 입력"
                                onChange={(e)=>{setPay(e.target.value)}}/>
                </Form.Group>
                <div>
                    <h4>점포 관리</h4>
                    <span>점포 선택</span>{'   '}
                    <select name="store">
                        <option value="1">1번 가게</option>
                        <option value="2">2번 가게</option>
                        <option value="3">3번 가게</option>
                    </select>
                </div>
                
                <br/>
            
                <div className="d-grid gap-2">
                    <Button variant="outline-secondary" type="submit">
                        수정완료
                    </Button>
                </div>
            </Form>
        </div>

        <Button variant="outline-secondary">
            <Link to="/">메인으로</Link>
        </Button>{' '}
        <Button variant="outline-secondary">
            <Link to="/join">로그아웃</Link>
        </Button>{' '}
        <Button variant="outline-secondary">
            <Link to="/join">회원탈퇴</Link>
        </Button>{' '}
    </div>
  )
}

export default MyPage