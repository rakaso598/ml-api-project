// app.js
require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware 설정
app.use(express.json());

// 기본 엔드포인트 테스트
app.get('/', (req, res) => {
    res.send('Machine Learning API Server is running!');
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
