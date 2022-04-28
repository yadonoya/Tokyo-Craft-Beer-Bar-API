const express = require('express');
const router = express.Router();
const Bars = require('../models/Bars');

router.get('/', async (req, res) => {
    const allBars = await Bars.findAllBars();
    res.send(allBars);
})

router.get('/:bar_name', async (req, res) => {
    const { bar_name } = req.params;
    const bar = await Bars.findByName(bar_name);
    res.send(bar[0]).status(200);
})

router.post('/', async (req, res) => {
    const { bar_name, station, smoking_allowed } = req.body;
    await Bars.createBar(bar_name, station, smoking_allowed);
    res.status(201).end();
})

router.patch('/:bar_name', async (req, res) => {
    const { bar_name } = req.params;
    const edits = req.body;
    await Bars.updateBar(bar_name, edits);
    res.status(204);
})

module.exports = router;