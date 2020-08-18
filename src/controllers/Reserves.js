const Reserves = require("../models/Index")

class ReservesController {

    async index(req,res){
        
        try{
         const reserves = await Reserves.findAll()
           return res.status(200).json({reserves})
        }catch(err){
            return res.status(404).json({err})            
        }
    }

    async create(req,res){
        const{reserveDate,exitDate}=req.body

        try{
            const reserves = await Reserves.create({reserveDate,exitDate})
            return res.status(201).json({reserves})
        }catch(err){
            return res.status(404).json({err})
        }
    }

    update(req,res){
        return
    }

    destroy(req,res){
        return
    }

}

module.exports = new ReservesController