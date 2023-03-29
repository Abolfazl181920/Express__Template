const { Router } = require('express')
const { db } = require("../config/db.config")
const router = Router()

router.post("/signup", (req, res) => {
    const q = "INSERT INTO booksdb.users (`username`, `password`, `email`) VALUES (?)"
    const userData = [
        req.body.username,
        req.body.password,
        req.body.email
    ]

    db.query(q, [ userData ], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

module.exports = router