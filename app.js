const express = require('express');
const app =  express();
require("dotenv").config();
const router = express.router();

const port = process.env.LOCAL_PORT;

// 라우터 설정
const indexRouter = require('./router/index');

app.use(express.json());
app.use('/', indexRouter, router);

app.get('/' , (req, res) => {
    res.send('Express start');
});
  
app.listen(port, () => {
    console.log(`listening on ${port}...`);
});
  