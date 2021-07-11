var express = require('express');
var router = express.Router();

const {Maquina} = require('../db')

router.get('/', async function(req, res, next) {
    const machines = await Maquina.findAll();
    res.json(machines)
});
router.get('/search/id/:id', async function(req, res, next) {
    const machines = await Maquina.findAll({
        where: {id : req.params.id}
    });
    res.json(machines)
});
router.post('/', async function(req, res, next) {
    const machine = await Maquina.create(req.body);
    res.json(machine)
});
router.put('/:machineId', async function(req, res, next) {
    let response = await Maquina.update(req.body,{
        where: {id :req.params.machineId}
    });
    if(response==0){
        res.status(404).send({failed: "No existe la maquina especificada"})
    }else{
        res.status(200).send({success: "se ha actualizado el estado de la maquina"})
    }
});
router.delete('/:machineId', async function(req, res, next) {
    let response = await Maquina.destroy({
        where: {id :req.params.machineId}
    });
    if(response==0){
        res.status(404).send({failed: "No existe la maquina especificada"})
    }else{
        res.status(200).send({success: "se ha borrado la maquina"})
    }
    
});
router.put('/update/operative/:idMachine/:bool', async function(req, res, next) {
    let response = await Maquina.update({operativa:req.params.bool},{
        where: {id :req.params.idMachine}
    });
    if(response==0){
        res.status(404).send({failed: "No existe la maquina especificada"})
    }else{
        res.status(200).send({success: "se ha actualizado el estado de la maquina"})
    }
});
router.put('/update/ubication/:idMachine/:ubication', async function(req, res, next) {
    let response = await Maquina.update({ubicacion:req.params.ubication},{
        where: {id :req.params.idMachine}
    });
    if(response==0){
        res.status(404).send({failed: "No existe la maquina especificada"})
    }else{
        res.status(200).send({success: "se ha actualizado el estado de la maquina"})
    }
});
router.put('/update/name/:idMachine/:name', async function(req, res, next) {
    let response = await Maquina.update({nombre:req.params.name},{
        where: {id :req.params.idMachine}
    });
    if(response==0){
        res.status(404).send({failed: "No existe la maquina especificada"})
    }else{
        res.status(200).send({success: "se ha actualizado el estado de la maquina"})
    }
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
