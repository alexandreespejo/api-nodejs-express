const {Sequelize,DataTypes} = require('sequelize')
const sequelize = require('../database/connection')

const Products = sequelize.define('products', {

    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    }

    
})

Products.sync()

module.exports = Products