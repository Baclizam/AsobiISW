var express = require('express');
var router = express.Router();

const {Maquina} = require('../db')

router.get('/', async function(req, res, next) {
    const machines = await Maquina.findAll();
    res.json(machines)
});
router.post('/', async function(req, res, next) {
    const machine = await Maquina.create(req.body);
    res.json(machine)
});




module.exports = router;
