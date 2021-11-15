const bcrypt = require('bcryptjs');
const tokenBuilder = require('./token-builder');
const router = require('express').Router();

const Users = require('../users/users-model');
const {
    validateCreds,
    checkUsernameFree,
    checkUsernameExists
} = require('../middleware/middleware')

router.post('/register', validateCreds, checkUsernameFree, (req, res, next) => {
    let user = req.body;
    const rounds = process.env.BCRYPT_ROUNDS || 4;
    const hash = bcrypt.hashSync(user.password, rounds);
    user.password = hash;
    Users.insertUser(user)
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(next)
})

router.post('/login', validateCreds, checkUsernameExists, (req, res, next) => {
    let { username, password } = req.body;
    Users.findBy({ username })
        .then(([user]) => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = tokenBuilder(user)
                res.status(200).json({
                    message: `Welcome, ${username}!`,
                    token
                })
            } else {
                    next({ status: 401, message: 'invalid credentials' })
            }
        })
        .catch(next);
})

module.exports = router;
