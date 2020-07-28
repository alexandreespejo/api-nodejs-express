const {Comments} = require('../models/start')

class CommentsController{

    async list(req, res){
        const {id} = req.params

        if(id!=undefined){
            
            await Comments.findAll({where:{id}}).then(comments => {

                if(comments.length==0)
                    return res.status(200).json({Response:"Comments not found"})
                else
                    return res.status(200).json({comments})

            }).catch((err) => {
                return res.status(404).json({err})
            })

        }else{

            await Comments.findAll().then(comments => {

                if(comments.length==0)
                    return res.status(200).json({Response:"Comments not found"})
                else
                    return res.status(200).json({comments})
                    
            }).catch((err) => {
                return res.status(404).json({err})
            })

        }
    }

    async create(req, res){
        const {text,userId} = req.body
        
        await Comments.create({text,userId}).then(() => {
            return res.status(201).json({Response:"Comments Created"})
        }).catch((err) => {
            return res.status(404).json({Response:"Comments not Created ",err})
        })
    }

    async update(req, res){
        const {id} = req.params
        const {text} = req.body

        await Comments.update({text},{where:{id}}).then(() => {
            return res.status(200).json({Response:"Comments Updated"})
        }).catch((err) =>{
            return res.status(404).json({Response:"Comments not Updated ",err})
        })
    }

    async delete(req, res){
        const {id} = req.params

        await Comments.destroy({where:{id}}).then(() => {
            return res.status(200).json({Response:"Comments deleted"})
        }).catch(() => {
            return res.status(404).json({Response:"Comments not deleted ",err},)
        })
    }

}

module.exports = new CommentsController