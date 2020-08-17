const {Accommodations} = require('../models/Index')

class AccommodationsController{

    async index(req, res){
        const {id} = req.params

        if(id!=undefined){
            
            await Accommodations.findAll({where:{id}}).then(accommodations => {

                if(accommodations.length==0)
                    return res.status(200).json({Response:"accommodations not found"})
                else
                    return res.status(200).json({accommodations})

            }).catch((err) => {
                return res.status(404).json({err})
            })

        }else{

            await Accommodations.findAll().then(accommodations => {

                if(accommodations.length==0)
                    return res.status(200).json({Response:"accommodations not found"})
                else
                    return res.status(200).json({accommodations})
                    
            }).catch((err) => {
                return res.status(404).json({err})
            })

        }
    }

    async create(req, res){
        const {text,userId} = req.body
        
        await Accommodations.create({text,userId})
            .then(() => res.status(201).json({Response:"Comments Created"}))
            .catch((err) => res.status(404).json({Response:"Comments not Created ",err}))
    }

    async update(req, res){
        const {id} = req.params
        const {text} = req.body

        await Accommodations.update({text},{where:{id}}).then(() => {
            return res.status(200).json({Response:"accommodations Updated"})
        }).catch((err) =>{
            return res.status(404).json({Response:"accommodations not Updated ",err})
        })
    }

    async destroy(req, res){
        const {id} = req.params

        await Accommodations.destroy({where:{id}}).then(() => {
            return res.status(200).json({Response:"accommodations deleted"})
        }).catch(() => {
            return res.status(404).json({Response:"accommodations not deleted ",err})
        })
    }

}

module.exports = new AccommodationsController