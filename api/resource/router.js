const router = require('express').Router()

router.get('/', (req, res, next) => {
    return console.log('in resource router')
})

module.exports = router;