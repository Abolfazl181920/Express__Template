const { Router } = require("express")
const router = Router()
const { pool } = require("../config/db.config")

router.post("/books", (req, res) => {
    const q = "INSERT INTO booksdb.books (`title`, `descr`, `price`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.descr,
        req.body.price
    ]

    pool.query(q, [ values ], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

module.exports = router