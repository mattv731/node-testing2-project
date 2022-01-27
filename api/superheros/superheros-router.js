const Super = require('./superheros-model')
const router = require('express').Router()

router.get('/', (req, res, next) => {
    Super.get()
    .then(supers => {
        res.status(200).json(supers)
    })
    .catch(err => {
        next(err)
    })
})

router.get('/:id', (req, res, next) => {
    Super.getById(req.params.id)
    .then(hero => {
        res.json(hero)
    })
    .catch(err => {
        next(err)
    })
})

module.exports = router