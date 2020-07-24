const express = require('express')
const app = express()
const comments = require('./routes/comments')

app.use(express.json())

app.use('/comments', comments)

app.listen(process.env.PORT,() => {
    console.log("Server is running")
})