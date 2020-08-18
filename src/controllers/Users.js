const {Users} = require('../models/Index')
const {hash} = require('bcryptjs')

class UsersController {

    async index(req, res){
        try {
            const users = await Users.findAll()
            return res.status(200).json({users})
        }catch(err){
            return res.status(404).json({err})
        }
    }

    async create(req, res){
        const{name,pass} = req.body
        try{
        const incryptedPass = await hash(pass,10)
        const users = await Users.create({name,pass:incryptedPass})
            return res.status(201).json({users})
        }catch(err){
            return res.status(404).json({err})
        }
    }
}

module.exports = new UsersController