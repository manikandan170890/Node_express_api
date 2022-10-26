import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routes/user.js"

import cors from "cors"


const app = express()
app.use(cors())

app.use(bodyParser.json())


app.use('/users', userRouter)

app.listen(5000, function() {
    console.log('Node server is running on port 5000');
})


