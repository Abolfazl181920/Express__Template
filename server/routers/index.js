const homeRouter = require("../routers/home")
const getBooksRouter = require("../routers/books[get]")
const postBooksRouter = require("../routers/books[post]")
const deleteBooksRouter = require("../routers/books[delete]")
const putBooksRouter = require("../routers/books[put]")
const postSignupRouter = require("../routers/signup[post]")
const postSigninRouter = require("../routers/signin[post]")

module.exports = {
    homeRouter,
    getBooksRouter,
    postBooksRouter,
    deleteBooksRouter,
    putBooksRouter,
    postSignupRouter,
    postSigninRouter
}