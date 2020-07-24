const express = require('express')
const app = express()
const comments = require('./routes/comments')
const users = require('./routes/users')

app.use(express.json())

app.use('/comments', comments)

app.use('/users', users)


app.listen(process.env.PORT,() => {
    console.log("Server is running")
})