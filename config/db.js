// 나중에 오라클 연결
// 일단 mysql2 사용함

const mysql = require('mysql2');

let conn = mysql.createConnection({
    host : "localhost", 
    user : "root", 
    password : "1234", 
    port : 3306, 
    database : "nodejs"
});

conn.connect();

module.exports = conn;