const mysql = require("mysql")
require('dotenv').config()

const db = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    database: 'mysql'
})

db.connect((err) => {
    if (err) console.log('Connection Failed!')
    return console.log('Connection Success!')
})

module.exports = { db }