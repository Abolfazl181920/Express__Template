const { Router } = require("express")
const app = Router()

app.get("/", (req, res) => {
    res.json("Home Data!")
})

module.exports = app