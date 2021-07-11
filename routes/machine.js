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
router.put('/:machineId', async function(req, res, next) {
    await Maquina.update(req.body,{
        where: {id :req.params.machineId}
    });
    res.json({success: "se ha modificado"})
});
router.delete('/:machineId', async function(req, res, next) {
    await Maquina.destroy({
        where: {id :req.params.machineId}
    });
    res.json({success: "se ha borrado la maquina"})
});
router.put('/update/operative/:idMachine/:bool', async function(req, res, next) {
    await Maquina.update({operativa:req.params.bool},{
        where: {id :req.params.idMachine}
    });
    res.json({success: "se ha modificado"})
});
router.put('/update/ubication/:idMachine/:ubication', async function(req, res, next) {
    await Maquina.update({ubicacion:req.params.ubication},{
        where: {id :req.params.idMachine}
    });
    res.json({success: "se ha modificado"})
});
router.put('/update/name/:idMachine/:name', async function(req, res, next) {
    await Maquina.update({nombre:req.params.name},{
        where: {id :req.params.idMachine}
    });
    res.json({success: "se ha modificado"})
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
