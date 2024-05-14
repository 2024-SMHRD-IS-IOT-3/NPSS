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
        <form className="formTag" onSubmit={handleCheck}>
            <span>사업자 등록번호</span> <br/>
            <input type="text" name="ID" placeholder='사업자 등록번호를 입력하세요.' onChange={(e)=>{setLicense(e.target.value)}}/>
            <br/>
            <br/>
            <span>이용하실 서비스를 선택해주세요.</span> <br/>
            <div key={"SystemCheck"} className="formCheckbox">
                <input type="checkbox" name="system" value="1"/>태양열 발전 + 냉난방 제어<br/>
                <input type="checkbox" name="system" value="2"/>태양열 발전 + 간판/조명 제어<br/>
                <input type="checkbox" name="system" value="all"/>모든 서비스 이용<br/>
            </div>
            <br/><br/>
            <span>결제정보 입력</span><br/>
            <input type="password" name="PW" placeholder='카드번호를 입력해주세요.' onChange={(e)=>{setPay(e.target.value)}}/>
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

export default Check