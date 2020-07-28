const Users = require('./Users')
const Comments = require('./Comments')

Users.hasMany(Comments)
Comments.belongsTo(Users) 

Users.sync({alter:true}).then(() => {
    Comments.sync({alter:true})
})


module.exports = {
    Users,
    Comments
}