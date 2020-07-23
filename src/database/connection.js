const {Sequelize} = require('sequelize')
require('dotenv').config()

const db = process.env.DB
const user = process.env.DB_USER
const pass = process.env.DB_PASS
const host = process.env.DB_HOST
const dialect = process.env.DB_DIALECT

const connection = new Sequelize(db, user, pass, {
    host,
    dialect
});

connection.authenticate().then(()=>{
    console.log('Connected in Database')
}).catch((err)=>{
    console.log('Not Connected in Database ',err)
})

module.exports = connection