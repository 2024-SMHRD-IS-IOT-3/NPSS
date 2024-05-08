const express = require('express');
const router = express.Router();
const conn = require('../config/db');
const path = require('path');

// 메인 경로
router.get('/', (req, res)=>{
    console.log("누군가 메인페이지에 접근!")
    res.sendFile(path.join(__dirname, "..", "react-project", "build", "index.html"))
})




module.exports = router;