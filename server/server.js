const express = require("express")
const cors = require('cors')
require('dotenv').config()
const { 
    homeRouter,
    getBooksRouter,
    postBooksRouter, 
    deleteBooksRouter,
    putBooksRouter,
    postSignupRouter,
    postSigninRouter  
} = require("./routers/index")

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

app.use(
    homeRouter,
    getBooksRouter,
    deleteBooksRouter,
    putBooksRouter,
    postBooksRouter,
    postSignupRouter,
    postSigninRouter
)

app.listen(3001, () => console.log('server is running on port 3001!'))