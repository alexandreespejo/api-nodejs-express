const Users = require('../models/Users')

class UsersController {

    async list(req, res){

        await Users.findAll().then(users => {
            return res.status(200).json({users})
        })
    }

    async create(req, res){
        const{name,pass} = req.body

        await Users.create({name,pass}).then(() => {
            return res.status(201).json({Response:"User Created"})
        }).catch(() => {

            return res.status(404).json({Response:"User not Created"})
        })
    }
}

module.exports = new UsersController