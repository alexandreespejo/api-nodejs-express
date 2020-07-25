const {DataTypes} = require('sequelize')
const connection = require('../database/connection')

const Users = connection.define('users', {
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    pass:{
        type:DataTypes.STRING,
        allowNull:false
    }
})



module.exports = Users