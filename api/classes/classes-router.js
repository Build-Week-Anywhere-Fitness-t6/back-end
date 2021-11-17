const router = require('express').Router();
const { checkClassExists, restricted, validateClass } = require('../middleware/middleware');
const Classes = require('./classes-model');

router.get('/', restricted, async (req, res, next) => {
    res.json(await Classes.getAllClasses())
})

router.post('/', restricted, validateClass, (req, res, next) => {
    Classes.insertClass(req.body)
        .then(newClass => {
            res.status(201).json(newClass)
        })
        .catch(err => {
            next(err)
        })
  })

router.get('/:id', restricted, checkClassExists, async (req, res, next) => {
    res.json(await Classes.getClassById(req.params.id))
})

router.put('/:id', restricted, checkClassExists, (req, res, next) => {
    Classes.updateClass(req.params.id, req.body)
        .then(updatedClass => {
            res.status(200).json(updatedClass)
        })
        .catch(next)
})

router.delete('/:id', restricted, checkClassExists, async (req, res, next) => {
    res.status(200).json(await Classes.deleteClass(req.params.id))
})

module.exports = router;
