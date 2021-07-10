const {Sequelize} = require('sequelize')

const FilmModel = require('./models/films')

const sequelize = new Sequelize('yEqg5petzD','yEqg5petzD','dSQHw3hRLu',{
    host:'remotemysql.com',
    dialect:'mysql',

})

const Film = FilmModel(sequelize,Sequelize)

sequelize.sync({force:false})
.then(()=>{
    console.log('Tablas sincronizadas');
})

module.exports = {
    Film
}