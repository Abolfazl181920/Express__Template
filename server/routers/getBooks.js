const { Router } = require('express')
const { pool } = require("../config/db.config")
const router = Router()

router.get("/books", (req, res) => {
    const q = "SELECT * FROM booksdb.books"
    pool.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

module.exports = router