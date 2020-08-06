const Users = require('./Users')
const Accommodations = require('./Accommodations')

Users.hasMany(Accommodations)
Accommodations.belongsTo(Users) 

Users.sync({alter:true}).then(() => {
    Accommodations.sync({alter:true})
})


module.exports = {
    Users,
    Accommodations
}