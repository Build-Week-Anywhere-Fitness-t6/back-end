const router = require('express').Router();
const Classes = require('./classes-model');

router.get('/', async (req, res) => {
    res.json(await Classes.getAllClasses())
})

router.post('/', async (req, res) => {
    res.status(201).json(await Classes.insertClass(req.body))
  })

module.exports = router;
