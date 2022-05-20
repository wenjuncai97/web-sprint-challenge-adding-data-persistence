const router = require('express').Router()

router.get('/', (req, res, next) => {
    return console.log('in project router')
})

module.exports = router;