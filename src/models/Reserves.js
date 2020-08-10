const {DataTypes} = require('sequelize')
const connection = require('../database/connection')

const Reserves = connection.define('reserves', {

    reserveDate:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    exitDate:{
        type:DataTypes.TEXT,
        allowNull:false
    }
  
})


module.exports = Reserves