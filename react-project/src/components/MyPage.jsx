import React, { useState, useEffect, useCallback } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from '../axios';
import { Link } from 'react-router-dom';
import AccordionMenu from './AccordionMenu';

let returnType = 'XML';


const MyPage = ({ licenseNum, setLicenseNum }) => {
  // 정보수정 페이지
  // 1. 비번 확인 해서 정보 수정할 수 있도록.

  const [pw, setPw] = useState('');
  const [checkPw, setCheckPw] = useState('');
  const [pay, setPay] = useState('');
  const [license, setLicense] = useState();
  const [schoolNum, setSchoolNum] = useState();
  const [confirmedSchoolNum, setConfirmedSchoolNum] = useState();

  const handleMyPage = (e) => {
    e.preventDefault();
    console.log('handle MyPage function');
  };

  useEffect(() => {
    console.log('useEffect 실행');
  });

  const handleCheckRegistrationNumber = async (
    req: string,
  ): Promise<string> => {
    console.log('req 14 ', req);
    const url: string = `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${process.env.REACT_APP_API_KEY}&returnType=${returnType}`;
        const { data } = await axios.post(url, {
            businesses: [req],
        }).then(res=>console.log(res));
        // 📌 01 값이 반환되면 계속사업자 02 값은 휴업자 03 값은 폐업자로 확인이 가능합니다.
        return console.log("axios 내부임", data.data[0].b_no);
        };
    /*    
    axios.post(url).then((res) => {
      setLicenseNum(res.data[0].b_stt_cd);
    });
    console.log('b_no : ', licenseNum);
    */
 

  const handlerCheckSchoolNum = useCallback(async () => {
    console.log('handler check school number function', schoolNum);
    try {
      const data = await handleCheckRegistrationNumber(schoolNum);
      console.log('data in 49', data);
      if (data !== null) {
        setConfirmedSchoolNum(true); // 영업중으로 확인되는 사업자
        console.log('영업중으로 확인됩니다.');
      } else {
        setConfirmedSchoolNum(false); // 휴업, 폐업으로 확인되는 사업자
        console.log('휴업, 폐업으로 확인됨');
      }
    } catch (error) {
      console.log(error);
    }
  }, [schoolNum, setSchoolNum, confirmedSchoolNum, setConfirmedSchoolNum]);

  return (
    <div>
      <div className="header">
        <Link to="/">
          <img
            className="logo2"
            src="img/NPSS_logo2.png"
            alt="이미지 준비중..."
          />
        </Link>
      </div>
      <div className="formBox">
        <h4>정보 수정</h4>
        <div className="formTag">
          <span>사업자 등록번호 변경</span> <br />
          <input
            type="text"
            className="licenseInput"
            onChange={(e) => {
              setSchoolNum(e.target.value);
            }}
            name="code1"
            defaultValue=""
            size="3"
            alt="사업자등록번호"
            style={{ imeMode: 'disabled' }}
            maxLength="10"
          />
          <button type="submit" onClick={handlerCheckSchoolNum}>
            인증하기
          </button>
          <br />
          <br />
          <span>변경하실 서비스를 선택해주세요.</span> <br />
          <div key={'SystemCheck'} className="formCheckbox">
            <input type="checkbox" name="system" value="1" /> 태양열 발전 +
            냉난방 제어
            <br />
            <input type="checkbox" name="system" value="2" /> 태양열 발전 +
            간판/조명 제어
            <br />
            <input type="checkbox" name="system" value="all" /> 모든 서비스 이용
            <br />
          </div>
          <br />
          <br />
          <span>결제정보 수정</span>
          <br />
          <input
            type="password"
            className="formInput"
            name="PW"
            placeholder="변경하실 카드번호를 입력해주세요."
            onChange={(e) => {
              setPay(e.target.value);
            }}
          />
          <br />
          <div className="button-container-2">
            <strong>점포 관리</strong>
            <br />
            <span>점포 선택</span>
            {'   '}
            <select name="store">
              <option value="1">1번 가게</option>
              <option value="2">2번 가게</option>
              <option value="3">3번 가게</option>
            </select>
          </div>
          <br />
          <br />
          <div className="button-container">
            <button type="submit" className="btn" onClick={handleMyPage}>
              정보수정 완료
            </button>
          </div>
        </div>
        <div className="button-container-onclick">
          <button
            onClick={() => {
              window.location.href = '/';
            }}
          >
            메인으로
          </button>
          <button
            onClick={() => {
              window.location.href = '/index';
            }}
          >
            서비스화면으로
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
