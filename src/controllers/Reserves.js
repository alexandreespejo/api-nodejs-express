const Reserves = require("../models/Start")

class ReservesController {

    index(req,res){
         Reserves.findAll().then(reserve => {
           return res.status(200).json({reserve})
        })
    }

    create(req,res){
        const{reserveDate,exitDate}=req.body
        Reserves.create({reserveDate,exitDate}).then(() => {
            return res.status(201).send()
        }).catch(() =>{
            return res.status(404).send()
        })
    }

    update(req,res){
        return
    }

    destroy(req,res){
        return
    }

}

module.exports = new Reserves