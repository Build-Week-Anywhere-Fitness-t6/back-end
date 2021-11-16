const router = require('express').Router();
const Classes = require('./classes-model');

router.get('/', async (req, res) => {
    res.json(await Classes.getAllClasses())
})

router.post('/', async (req, res) => {
    res.status(201).json(await Classes.insertClass(req.body))
  })

router.get('/:id', async (req, res) => {
    res.json(await Classes.getClassById(req.params.id))
})

router.delete('/:id', async (req, res) => {
    res.status(200).json(await Classes.deleteClass(req.params.id))
})

module.exports = router;
