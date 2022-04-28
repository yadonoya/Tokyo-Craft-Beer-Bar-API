const express = require('express');
const router = express.Router();
const Bars = require('../models/Bars');

router.get('/', async (req, res) => {
    const allBars = await Bars.findAllBars();
    res.send(allBars);
})

module.exports = router;