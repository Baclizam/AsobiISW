const {Sequelize} = require('sequelize')

const MaquinaModel = require('./models/maquinas')

const sequelize = new Sequelize('yEqg5petzD','yEqg5petzD','dSQHw3hRLu',{
    host:'remotemysql.com',
    dialect:'mysql',

})


const Maquina = MaquinaModel(sequelize,Sequelize)
sequelize.sync({force:false})
.then(()=>{
    console.log('Tablas sincronizadas');
})

module.exports = {
    Maquina
}