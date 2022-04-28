const express = require('express');
const test = require('./controller/barsController');
const app = express();

app.use(express.json());

app.listen('3000', () => {
    console.log('Server is listening at port 3000');
});