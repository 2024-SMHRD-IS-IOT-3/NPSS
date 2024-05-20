import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import AccordionMenu from './AccordionMenu';
import ReactDOM from 'react-dom'
import axios from '../axios'
import '../Nav.css';
import { MdOutlineStorefront } from "react-icons/md";
import { HiHome } from "react-icons/hi2";

const Light = () => {
    const [storeNum, setStoreNum] = useState();

  
    const getstringDate = (date)=>{
        return date.toISOString().slice(0,10);
    }
    const [date, setDate] = useState(getstringDate(new Date()));
    
    // const [tempData, setTempData] = useState('');
    const [lightData, setLightData] = useState('');

    // const handleLight = (e) =>{
    //     e.preventDefault();
    //     console.log('handle Light function',  lightData);

    //     axios.post('/handleLight', {
    //         storeNum :storeNum
    //     })
    //     .then(res => {
    //         console.log('then',res.data);

    //         // if(res.data.length > 0){
    //         //     alert(`${res.data[0]}님 환영합니다.`);
    //         //     sessionStorage.setItem('user', JSON.stringify(res.data));
    //         //     window.location.href="/index";
    //         // } else {
    //         //     alert('아이디 혹은 비밀번호가 틀립니다!');
    //         // }
    //     })
    //     .catch((error)=>{
    //         console.error('Error:', error);
    //         alert('로그인에 실패하였습니다.');
    //     })
    // }

    useEffect(()=>{
        console.log('handle Light function',  lightData);
  
        axios.post('/handleLight', {
            storeIdx : 1
        })
        .then(res => {
            console.log('storeIdx', res.data.storeIdx)
            console.log('then', res.data.lightData[0]);
            setLightData(res.data.lightData[0]);
  
        })
        .catch((error)=>{
            console.error('Error:', error);
            alert('접속 실패하였습니다.');
        })
      },[])
     



  return (
    <div>
        <div className="header">
            <Link to="/"><img className="logo2" src='img/NPSS_logo2.png' alt='이미지 준비중...'/></Link>
        </div>

        <div className='contentPage'>
        <AccordionMenu/>
            <div className='indexInfo'>
                <h5 className='indexTitle'>아이스크림 남구점</h5>
                <input className="inputDate" type="date" value={date} onChange={(e)=>{setDate(e.target.value)}}></input>
                
            </div>
            <div className="indexDiv">
                <br/>
                <div className='indexContent'>
                    <h5>온도 데이터</h5>
                    <h3>tempData</h3>
                    <p>2% 🔺</p>
                    <img src="https://cdn-icons-png.flaticon.com/128/4721/4721635.png"/>
                </div>
                <div className='indexContent'>
                    <h5>밝기 데이터</h5>
                    <h3>{lightData}</h3>
                    <p>2% 🔺</p>
                    <img src="https://cdn-icons-png.flaticon.com/128/4721/4721635.png"/>
                </div>
                <div className='indexContent'>
                    <h5>목표 밝기</h5>
                    <h3>25 Lux</h3>
                    <p>2% 🔺</p>
                    <img src="https://cdn-icons-png.flaticon.com/128/4721/4721635.png"/>
                </div>
                <br/>
                <div className='indexGraph'>
                    <img src='https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimg3.tmon.kr%2Fcdn4%2Fdeals%2F2023%2F09%2F09%2F22982326658%2F22982326658_front_df4952f9de.jpg&type=sc960_832'></img>
                </div>

        </div>
        <br/><br/>

        <div className="button-container-2">
            <button onClick={()=>{window.location.href="/"}}>메인으로</button>  
        </div>
        <div className="button-container-2">
            <button onClick={()=>{window.location.href="/login"}}>로그인</button>  
        </div>
        <div className="button-container-2">
            <button onClick={()=>{window.location.href="/mypage"}}>정보수정</button>  
        </div>
        </div>
    </div>
 
  )
}

export default Light