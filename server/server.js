const express = require("express")
const cors = require('cors')
require('dotenv').config()
const { 
    home, getBooks, delBook, updateBook, addUser, showUser, addBooks
} = require("./routers/index")

const app = express()

// middlewares
app.use(cors())
app.use(express.json())

app.use(
    home,
    getBooks,
    delBook,
    updateBook,
    addBooks,
    addUser,
    showUser
)

app.listen(3001, () => console.log('server is running on port 3001!'))