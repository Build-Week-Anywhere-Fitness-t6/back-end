const router = require('express').Router();
const { checkClassExists } = require('../middleware/middleware');
const Classes = require('./classes-model');

router.get('/', async (req, res) => {
    res.json(await Classes.getAllClasses())
})

router.post('/', async (req, res) => {
    res.status(201).json(await Classes.insertClass(req.body))
  })

router.get('/:id', checkClassExists, async (req, res, next) => {
    res.json(await Classes.getClassById(req.params.id))
})

router.put('/:id', checkClassExists, (req, res, next) => {
    Classes.updateClass(req.params.id, req.body)
        .then(updatedClass => {
            res.status(200).json(updatedClass)
        })
        .catch(next)
})

router.delete('/:id', checkClassExists, async (req, res, next) => {
    res.status(200).json(await Classes.deleteClass(req.params.id))
})

module.exports = router;
