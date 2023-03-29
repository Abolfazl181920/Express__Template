const express = require("express")
const { jsonMW } = require("./middleware/json")
const { corsMW } = require("./middleware/cors")
require('dotenv').config()
const { 
    home, getBooks, delBook, updateBook, addUser, showUser, addBooks
} = require("./routers/index")

const app = express()

app.use(corsMW)
app.use(jsonMW)
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