module.exports = (sequelize,type) => {
    return sequelize.define('maquinas',{
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: type.STRING,
            allowNull: false
        },
        tipo:{
            type: type.STRING,
            allowNull: false
        
        },
        operativa:{
            type: type.BOOLEAN,
            allowNull: false
        
        },
        ubicacion: type.STRING,
        modelo:type.STRING
    })
}   