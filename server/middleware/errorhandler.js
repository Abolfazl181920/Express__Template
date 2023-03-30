const { logger } = require("../logs/logger")

const errorHandler = (err, res, next) => {
    if (res.headersSent) {
        return next(err)
    } else {
        res.status(500)
        res.render('error', { error: err })
        logger.info(`${req.method} ${req.url}`)
    }
}

module.exports = { errorHandler }