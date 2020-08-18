const {Accommodations} = require('../models/Index')

class AccommodationsController{

    async index(req, res){
        const {id} = req.params

        if(id!=undefined){
            try{

                const accommodations = await Accommodations.findAll({where:{id}})

                if(accommodations.length==0)
                    return res.status(404).send()
                else
                    return res.status(200).json({accommodations})

            }catch(err){
                return res.status(404).json({err})
            }

        }else{
            try{

                const accommodations = await Accommodations.findAll()

                if(accommodations.length==0)
                    return res.status(404).send()
                else
                    return res.status(200).json({accommodations})
                    
            }catch(err){
                return res.status(404).json({err})
            }

        }
    }

    async create(req, res){
        const {text,userId} = req.body
        try{
            const accommodations = await Accommodations.create({text,userId})
            res.status(201).json({accommodations})
        }catch(err){
            res.status(404).json({err})
        }
    }

    async update(req, res){
        const {id} = req.params
        const {text} = req.body

        try{
        const accommodations = await Accommodations.update({text},{where:{id}})
            return res.status(200).json({accommodations})
        }catch(err){
            return res.status(404).json({err})
        }
    }

    async destroy(req, res){
        const {id} = req.params
        try{
        const accommodations = await Accommodations.destroy({where:{id}})
            return res.status(200).json({accommodations})
        }catch(err){
            return res.status(404).json({err})
        }
    }

}

module.exports = new AccommodationsController