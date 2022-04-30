const bars = require('./controller/barsController');
const express = require('express');
const app = express();

app.use(express.json());
app.use(bars);

app.listen('3000', () => {
    console.log('Server is listening at port 3000');
});