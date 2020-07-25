const {DataTypes} = require('sequelize')
const connection = require('../database/connection')

const Comments = connection.define('comments', {

    text:{
        type:DataTypes.TEXT,
        allowNull:false
    }

    
})


module.exports = Comments