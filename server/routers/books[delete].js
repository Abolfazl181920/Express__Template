const { Router } = require("express")
const router = Router()
const { db } = require("../config/db.config")

router.delete("/books/:id", (req, res) => {
    const bookId = req.params.id
    const q = "DELETE FROM booksdb.books WHERE id = ?"

    db.query(q, [ bookId ], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

module.exports = router