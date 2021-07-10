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

router.get('/search/operative/:bool', async function(req,res){
    const machine = await Maquina.findAll({
        where: {operativa : req.params.bool}
    })
    res.json(machine)
});

router.get('/search/type/:tipo', async function(req,res){
    const machine = await Maquina.findAll({
        where: {tipo : req.params.tipo}
    })
    res.json(machine)
});

router.get('/search/ubication/:sala', async function(req,res){
    const machine = await Maquina.findAll({
        where: {ubicacion : req.params.sala}
    })
    res.json(machine)
});
module.exports = router;
