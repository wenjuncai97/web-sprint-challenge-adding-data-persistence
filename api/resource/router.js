const express = require('express')
const model = require('./model')
const router = express.Router()

router.get('/', (req, res, next) => {
    model.getAllResources()
        .then(resources => res.status(200).json(resources))
        .catch(err => next(err))
})

router.post('/', (req, res, next) => {
    model.addResource(req.body)
        .then(resource => res.status(201).json(resource))
        .catch(err => next(err))
})

module.exports = router;