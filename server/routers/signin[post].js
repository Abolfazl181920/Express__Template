const { Router } = require("express")
const router = Router()
const { db } = require("../config/db.config")

router.post("/signin", (req, res) => {
    const q = "SELECT * FROM booksdb.users WHERE username = ? AND password = ? AND email = ?"
    const userData = [
        req.body.username,
        req.body.password,
        req.body.email
    ]

    db.query(q, [ userData ], (err, data) => {
        if (err) throw err
        if (data.length === 1) {
            alert("User Exists")
            res.json(data)
        } else {
            alert("User Not Exists")
            res.json(err)
        }
    })
})

module.exports = router