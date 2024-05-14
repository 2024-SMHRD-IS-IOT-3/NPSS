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
    const [license, setLicense] = useState();

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
            <form className="formTag" onSubmit={handleMyPage}>
                <span>사업자 등록번호 변경</span> <br/>
                <input type="text" name="ID" placeholder='변경하실 사업자 등록번호를 입력하세요.' onChange={(e)=>{setLicense(e.target.value)}}/>
                <br/>
                <br/>
                <span>변경하실 서비스를 선택해주세요.</span> <br/>
                <div key={"SystemCheck"} className="formCheckbox">
                    <input type="checkbox" name="system" value="1"/>태양열 발전 + 냉난방 제어<br/>
                    <input type="checkbox" name="system" value="2"/>태양열 발전 + 간판/조명 제어<br/>
                    <input type="checkbox" name="system" value="all"/>모든 서비스 이용<br/>
                </div>
                <br/><br/>
                <span>결제정보 수정</span><br/>
                <input type="password" name="PW" placeholder='변경하실 카드번호를 입력해주세요.' onChange={(e)=>{setPay(e.target.value)}}/>
                <br/>
                <div className='button-container-2'>
                    <span>점포 관리</span><br/>
                    <span>점포 선택</span>{'   '}
                    <select name="store">
                        <option value="1">1번 가게</option>
                        <option value="2">2번 가게</option>
                        <option value="3">3번 가게</option>
                    </select>
                </div>
                    
                <br/><br/>
                <div className="button-container">
                    <button type="submit" className="btn">정보수정 완료</button>
                </div>
            </form>
        <div className="button-container-onclick">
                <button onClick={()=>{window.location.href="/"}}>메인으로</button>  
                <button onClick={()=>{window.location.href="/index"}}>서비스화면으로</button>  
        </div>
            </div>
        </div>
  )
}

export default MyPage