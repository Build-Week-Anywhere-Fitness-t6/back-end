const {JWT_SECRET} = require('../secrets');
const jwt = require('jsonwebtoken');

const User = require('../users/users-model');
const Classes = require('../classes/classes-model');

const restricted = (req, res, next) => {
    const token = req.header.authorization
    if (!token) {
        return next({ status: 401, message: 'token required' })
    }
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return next({
                status: 401,
                message: 'token invalid'
            })
        }
        req.decodedJwt = decoded;
        next()
    })
}

const validateCreds = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        next({
            status: 401,
            message: 'username and password required'
        })
    } else {
        next()
    }
}

async function checkUsernameFree(req, res, next) {
    const [user] = await User.findBy({ username: req.body.username })
    if (user) {
        next({ status: 422, message: 'username taken' })
    } else {
        next()
    }
}

async function checkUsernameExists(req, res, next) {
    const [user] = await User.findBy({ username: req.body.username})
    if (!user) {
        next({ status: 401, message: 'invalid credentials'})
    } else {
        next()
    }
}

async function checkClassExists(req, res, next) {
    const possibleClass = await Classes.getClassById(req.params.id)
    if (!possibleClass) {
        next({ status: 401, message: 'that class does not exist'})
    } else {
        next()
    }
}

module.exports = {
    restricted,
    validateCreds,
    checkUsernameFree,
    checkUsernameExists,
    checkClassExists
}
