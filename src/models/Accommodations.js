const {DataTypes} = require('sequelize')
const connection = require('../database/connection')

const Accommodations = connection.define('accommodations', {

    name:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    daily:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    discount:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    reserved:{
        type:DataTypes.BOOLEAN
    },
    deleted:{
        type:DataTypes.BOOLEAN
    }
  
})


module.exports = Accommodations