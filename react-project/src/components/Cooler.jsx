import React, { useEffect, useState, Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AccordionMenu from './AccordionMenu';
import ReactDOM from 'react-dom';
import axios from '../axios';
import '../Nav.css';
import { MdOutlineStorefront } from 'react-icons/md';
import { HiHome } from 'react-icons/hi2';
import ApexCharts from 'apexcharts';
// import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import ReactApexChart from 'react-apexcharts';
import Chart from 'react-apexcharts';

const Cooler = () => {
  const getstringDate = (date) => {
    return date.toISOString().slice(0, 10);
  };
  const [date, setDate] = useState(getstringDate(new Date()));

  const [tempData, setTempData] = useState('');
  useEffect(() => {
    console.log('handle temp function', tempData);

    axios
      .post('/handleTemp', {
        storeIdx: 1,
      })
      .then((res) => {
        console.log('storeIdx', res.data.storeIdx);
        console.log('then', res.data.tempData[0]);
        setTempData(res.data.tempData[0]);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('접속 실패하였습니다.');
      });
  }, []);

  const inputGoal = document.getElementsByClassName('inputGoal');
  const inputGoal2 = document.getElementsByClassName('inputGoal2');
  const [tempGoal, setTempGoal] = useState();
  const [humGoal, setHumGoal] = useState();

  const handleGoalLight = () => {
    console.log('목표 밝기 입력');
    inputGoal[0].style.display = 'inline';
  };
  const handleGoalHumid = () => {
    console.log('목표 습도 입력');
    inputGoal2[0].style.display = 'inline';
  };

  return (
    <div>
      <div className="indexHeader">
        <Link to="/">
          <img
            className="indexLogo2"
            src="img/NPSS_logo3.png"
            alt="이미지 준비중..."
          />
        </Link>
        <img
          className="indeximg"
          src="img/sign_out.png"
          alt="이미지 준비중..."
          onClick={() => {
            sessionStorage.removeItem('user');
            window.location.href = '/login';
          }}
        />
        <img
          className="indeximg"
          src="img/user.png"
          alt="이미지 준비중..."
          onClick={() => {
            window.location.href = '/mypage';
          }}
        />
        <img
          className="indeximg"
          src="img/chart_line_up.png"
          alt="이미지 준비중..."
          onClick={() => {
            window.location.href = '/light';
          }}
        />
      </div>

      <div className="contentPage">
        <AccordionMenu />

        <div className="indexDiv">
          <div className="indexInfo">
            <h5 className="indexTitle">아이스크림 남구점</h5>
            <input
              className="inputDate"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="contentBox">
            <div className="indexContent1">
              <h5>주간 현황</h5>
              <div className="indexSmallDiv">
                <div>
                  <h5>평균 사용량</h5>
                  <div className="contentWrapper">
                    <div className="circle"></div>
                    <h3>25 Lux</h3>
                  </div>
                </div>
                <div>
                  <h5>작동 현황</h5>
                  <div className="contentWrapper">
                    <div className="circle2"></div>
                    <h3>OFF</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="indexDiv2">
              <div>
                <div className="indexContent2">
                  <h5>현재 온도</h5>
                  <h3>{tempData} Lux</h3>
                  <p>2% 🔺</p>
                </div>
                <div className="indexContent2">
                  <h5>현재 습도</h5>
                  <h3>25 Lux</h3>
                  <p>2% 🔺</p>
                </div>
              </div>
              <div>
                <div className="indexContent2">
                  <h5>목표 온도</h5>
                  <div className='Goal'>
                  <div className="formContent">
                    <div className="inputWithButton">
                      <input
                        type="text"
                        onChange={(e) => setTempGoal(e.target.value)}
                      />
                      <button onClick={handleGoalLight}>입력</button>
                    </div>
                  </div>
                  <h3 className="inputGoal">{tempGoal} Lux</h3>
                  </div>
                </div>
                <div className="indexContent2">
                  <h5>목표 습도</h5>
                  <div className='Goal'>
                  <div className="formContent">
                    <div className="inputWithButton">
                      <input
                        type="text"
                        onChange={(e) => setHumGoal(e.target.value)}
                      />
                      <button onClick={handleGoalHumid}>입력</button>
                    </div>
                  </div>
                  <h3 className="inputGoal2">{humGoal} Lux</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="indexGraph">
            <h5>누적 현황</h5>
            <Chart
              type="line"
              series={[
                {
                  name: 'Session Duration',
                  data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
                },
                {
                  name: 'Page Views',
                  data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
                },
                {
                  name: 'Total Visits',
                  data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
                },
              ]}
              options={{
                chart: {
                  height: 350,
                  type: 'line',
                  zoom: {
                    enabled: false,
                  },
                },

                title: {
                  text: 'Product Trends by Month',
                  align: 'left',
                },
                xaxis: {
                  categories: [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                  ],
                },
                theme: {
                  mode: 'light',
                  palette: 'palette10',
                  monochrome: {
                    enabled: false,
                    color: '#255aee',
                    shadeTo: 'light',
                    shadeIntensity: 0.65,
                  },
                },
              }}
            />
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Cooler;
