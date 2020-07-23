const express = require('express')
const app = express()
const products = require('./routes/products')

app.use(express.json())

app.use('/products', products)

app.listen(process.env.PORT,() => {
    console.log("Server is running")
})