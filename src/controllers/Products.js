const Products = require('../models/Products')

class ProductsController{

    async list(req, res){
        const {id} = req.params
        if(id!=undefined){
            await Products.findAll({where:{id}}).then(products => {
                console.log(products)
                if(products.length==0)
                    return res.status(200).json({Response:"Product not found"})
                else
                    return res.status(200).json({products})

            }).catch((err) => {
                return res.status(404).json({err})
            })

        }else{
            await Products.findAll().then(products => {
                return res.status(200).json({products})
            }).catch((err) => {
                return res.status(404).json({err})
            })
        }
    }

    async create(req, res){
        const {name,price} = req.body
        await Products.create({name,price}).then(() => {
            return res.status(201).json({Response:"Product Created"})
        }).catch((err) => {
            return res.status(404).json({Response:"Product not Created ",err})
        })
    }

    async update(req, res){
        const {id} = req.params
        const {name,price} = req.body

        await Products.update({name,price},{where:{id}}).then(() => {
            return res.status(200).json({Response:"Product Updated"})
        }).catch((err) =>{
            return res.status(404).json({Response:"Product not Updated ",err})
        })
    }

    async delete(req, res){
        const {id} = req.params

        await Products.destroy({where:{id}}).then(() => {
            return res.status(200).json({Response:"Product deleted"})
        }).catch(() => {
            return res.status(404).json({Response:"Product not deleted ",err},)
        })
    }

}

module.exports = new ProductsController