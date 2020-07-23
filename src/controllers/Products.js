const Products = require('../models/Products')

class ProductsController{

    async list(req,res){
        await Products.findAll().then(products => {
            return res.status(200).json({products})
        })
    }
    async create(req,res){
        const {name,price} = req.body
        await Products.create({name,price}).then(products => {
            return res.status(201).json({Response:"Product Created"})
        }).catch((err) => {
            return res.status(404).json({Response:"Product not Created ",err})
        })
    }

}

module.exports = new ProductsController