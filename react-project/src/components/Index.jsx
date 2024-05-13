import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import axios from '../axios'
import { Link } from 'react-router-dom';

// 로그인 완료 후 보일 페이지
const Index = () => {

    const [store, setStore] = useState([{
        storeName : "스마트인재개발원 1호점",
        idx : 1
    }]);

  return (
    <div className='indexDiv'>
        <div className='logout'>        
            <Link to="/">로그아웃</Link>
        </div>
        <div className="header">
            <Link to="/"><img className="logo2" src='img/NPSS_logo2.png' alt='이미지 준비중...'/></Link>
        </div>

        <div className='menubar'>
            <ul>
                <li>회사소개</li>
                <li>매장 관리
                    <ul>
                        {store.map((storeName)=>{
                            <li key = {store.idx}> {store.storeName}
                                <ul>
                                    <li>조명</li>
                                    <li>간판</li>
                                    <li>에어컨</li>
                                    <li>태양열</li>
                                </ul>
                            </li>
                        })}

                    </ul>
                </li>


            </ul>






        </div>



        <div className='indexGraph'>냉난방 장치 제어</div>
        <br/>
        <div className='indexGraph'>간판 밝기 제어</div>
        <div className='indexGraph'>실내 조명 제어</div>
        <br/>
        <div className='indexGraph'>태양열 생산량 그래프</div>
        <div className='indexGraph'>태양열 생산 전력 공급 제어</div>
        <br/><br/>

        <Button variant="outline-secondary">
            <Link to="/">메인으로 돌아가기</Link>
        </Button>{' '}
        <Button variant="outline-secondary">
            <Link to='/join'>회원가입</Link>
        </Button>{' '}
        <Button variant="outline-secondary">
        <Link to='/login'>로그인</Link>    
        </Button>{' '}
    </div>
  )
}

export default Index