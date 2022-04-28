const express = require('express');
const router = express.Router();
const Bars = require('../models/Bars');

router.get('/', async (req, res) => {
    const allBars = await Bars.findAllBars();
    res.send(allBars);
})

router.post('/', async (req, res) => {
    const { bar_name, station, smoking_allowed } = req.body;
    await Bars.createBar(bar_name, station, smoking_allowed);
    res.status(201).end();
})

module.exports = router;