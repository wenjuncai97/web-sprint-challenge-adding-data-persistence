const express = require('express');
const router = express.Router();
const model = require('./model');

router.get('/', (req, res, next) => {
    model.findTasks()
        .then(tasks => res.status(200).json(tasks))
        .catch(err => next(err))
})

router.post('/', (req, res, next) => {
    model.addTasks(req.body)
        .then(task => res.status(201).json(task))
        .catch(err => next(err))
})

module.exports = router;