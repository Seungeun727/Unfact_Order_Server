const express = require('express');
const app =  express();
require("dotenv").config();

const port = 3000;

console.log("db port Result", port);

app.use(express.json());

app.get('/' , (req, res) => {
    res.send('Express start');
});
  
app.listen(port, () => {
    console.log('하이');
    console.log(`listening on ${port}...`);
});
  