const express =require( 'express')

const accommodations =require('./routes/accommodations')
const users =require( './routes/users')

const app = express()


app.use(express.json())

app.use(accommodations)

app.use(users)


app.listen(process.env.PORT,() => {
    console.log("Server is running")
})