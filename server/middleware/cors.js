const express = require("express")
const cors = require("cors")
const app = express()

const corsMW = app.use(cors({
    origin: '*',
    methods: [ 'GET', 'POST', 'PUT', 'DELETE' ],
    allowedHeaders: ['Content-Type']
}))

module.exports = { corsMW }