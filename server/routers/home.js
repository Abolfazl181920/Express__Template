const { Router } = require("express")
const app = Router()
const homeController = require("../controllers/homeController")
const { logger } = require("../logs/logger")

app.get("/", homeController)
logger.info("Home req is working")

module.exports = app