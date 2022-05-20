const router = require('express').Router()

router.get('/', (req, res, next) => {
    return console.log('in task router')
})

module.exports = router;