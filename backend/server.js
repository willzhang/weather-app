const express = require('express');
const morgan = require('morgan'); // 导入 morgan
const app = express();
const port = 3000;

app.use(express.json()); // 解析 JSON 请求体

// 使用 morgan 记录请求日志，格式为 "combined"（类似 Apache 的日志格式）
app.use(morgan('combined'));

// 模拟天气数据
app.get('/weather', (req, res) => {
    const weatherData = {
        temperature: 25, // 模拟温度（摄氏度）
        condition: '晴天' // 模拟天气状况
    };
    res.json(weatherData);

    // 额外打印请求细节（可选，手动日志）
    console.log('收到天气请求 - 客户端IP:', req.ip, '查询时间:', new Date().toISOString());
});

// 启动服务器
app.listen(port, () => {
    console.log(`后端服务运行在 http://localhost:${port}`);
});
