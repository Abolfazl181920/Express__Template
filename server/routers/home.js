const { Router } = require("express")
const app = Router()
const homeController = require("../controllers/homeController")
// import logger from '../logs/logger'
// logger.info("Hello visiter!")
app.get("/", homeController)

module.exports = app