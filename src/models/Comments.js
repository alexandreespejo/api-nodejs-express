const {DataTypes} = require('sequelize')
const connection = require('../database/connection')

const Comments = connection.define('comments', {

    text:{
        type:DataTypes.TEXT,
        allowNull:false
    }

    
})

Comments.sync()

module.exports = Comments