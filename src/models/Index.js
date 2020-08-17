const Users = require('./Users')
const Accommodations = require('./Accommodations')
const Reserves = require('./Reserves')
const connection = require('../database/connection')

Users.hasMany(Accommodations)
Accommodations.belongsTo(Users) 
Reserves.hasOne(Accommodations)
Reserves.hasOne(Users)
Users.hasOne(Reserves)

connection.sync()


module.exports = {
    Users,
    Accommodations,
    Reserves
}