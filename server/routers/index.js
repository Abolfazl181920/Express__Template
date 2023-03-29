const home = require("../routers/home")
const getBooks = require("../routers/getBooks")
const addBooks = require("../routers/addBook")
const delBook = require("./delBook")
const updateBook = require("../routers/updateBook")
const addUser = require("../routers/addUser")
const showUser = require("../routers/showUser")

module.exports = {
    home,
    getBooks,
    addBooks,
    delBook,
    updateBook,
    addUser,
    showUser
}