import express from 'express'

import accommodations from'./routes/accommodations'
import users from './routes/users'

const app = express()


app.use(express.json())

app.use(accommodations)

app.use(users)


app.listen(process.env.PORT,() => {
    console.log("Server is running")
})