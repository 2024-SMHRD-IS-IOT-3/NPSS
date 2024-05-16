const express = require('express');
const router = express.Router();
const connectToOracle  = require('../config/db'); // 데이터베이스 연결 객체를 가져옴
const path = require('path');

// 메인 경로
router.post('/', (req, res) => {
    console.log("누군가 메인페이지에 접근!")
    res.sendFile(path.join(__dirname, "..", "react-project", "build", "index.html"))
})

// 회원 가입을 담당하는 경로
router.post('/handleJoin', async (req, res) => { // 비동기 함수로 변경
    console.log('누군가 회원 가입을 희망합니다.', req.body);

    let { id, pw, email } = req.body;

    try {
        const connection = await connectToOracle(); // 데이터베이스 연결 객체를 가져옴

        // // 1. 회원가입을 할 수 있는 쿼리문 작성 - sql
        // let sql = `INSERT INTO USER_INFO (USER_ID, USER_PW, USER_EMAIL, JOINED_AT) VALUES (:id, :pw, :email, SYSDATE)`;

        // // 2. DB에 연결해서 쿼리문을 실행
        // const result = await connection.execute(sql, {
        //     id: id,
        //     pw: pw,
        //     email: email,

        // });        
        
        // 1. 회원가입을 할 수 있는 쿼리문 작성 - sql
        let sql = `INSERT INTO USER_INFO VALUES(:1, :2, :3, SYSDATE)`;

        // 2. DB에 연결해서 쿼리문을 실행
        result = await connection.execute(sql,[id,pw,email]);
        console.log(result);
        
        // 쿼리 실행 결과에 따라 응답을 보냄
        if (result.rowsAffected && result.rowsAffected > 0) {
            res.send({ result: "success" });
        } else {
            res.send({ result: "fail" });
        }
    } catch (err) {
        console.error('Error executing query:', err);
        res.status(500).send({ result: 'fail' });
    }
})

// 로그인을 담당하는 경로(기능)
router.post('/handleLogin', async (req, res)=>{
    console.log('handle login router', req.body)

    let {id, pw}= req.body;
    
    try {
        const connection = await connectToOracle(); // 데이터베이스 연결 객체를 가져옴
        let sql = `SELECT USER_ID FROM USER_INFO WHERE USER_ID =:1 AND USER_PW =:2`;
        result = await connection.execute(sql, [id, pw]); 
        console.log(result.rows);
        if (result.rows.length > 0) {
            res.send(result.rows);
        } else {
            res.send({ result: "fail" });
        }
    } catch (err){
        console.error('Error executing query:', err);
        res.status(500).send({ result: 'fail' });
    }
})


module.exports = router;