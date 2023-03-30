const express = require("express")
const { 
    corsMW,
    errorHandler,
    jsonMW 
} = require("./middleware/index")
const { 
    home, getBooks, delBook, updateBook, addUser, showUser, addBooks
} = require("./routers/index")

require('dotenv').config()
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
    
app.use(errorHandler)

app.listen(3001, () => console.log('server is running on port 3001!'))