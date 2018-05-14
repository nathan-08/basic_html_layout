const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './../')));

app.listen(3005, console.log('listening 0,0'))