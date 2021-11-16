const router = require('express').Router();
const Users = require('./users-model')
const {
    restricted
} = require('../middleware/middleware')

router.get('/', restricted, async (req, res) => {
    res.json(await Users.getAllUsers())
  })
  
  router.post('/', async (req, res) => {
    res.status(201).json(await Users.insertUser(req.body))
  })

module.exports = router;
