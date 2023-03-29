const { Router } = require("express")
const router = Router()
const { db } = require("../config/db.config")

router.put("/book/:id", (req, res) => {
    const bookId = req.params.id
    const q = "UPDATE booksdb.books SET `title` = ?, `descr` = ?, `price` = ? WHERE id = ?"

    const values = [
        req.body.title,
        req.body.descr,
        req.body.price
    ]

    db.query(q, [ ...values, bookId ], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

module.exports = router