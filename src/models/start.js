const Users = require('./Users')
const Comments = require('./Comments')

Users.hasMany(Comments)
Comments.belongsTo(Users)

Users.sync().then(() => {
    Comments.sync()
})


module.exports = {
    Users,
    Comments
}