// Imports
import express from 'express'
import * as userService from '../../models/Users/user.service'

const router = express.Router()

// Routes
router.post('/login', authenticate)
router.post('/register', register)
// Temp
router.get('/', getAll)
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

function authenticate(req, res, next) {
  userService.authenticate(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Incorrect login or password' }))
    .catch(e => next(e))
}

function register(req, res, next) {
  userService.create(req.body)
    .then(() => res.json({ message: 'Success' }))
    .catch(e => next(e))
}

function getAll(req, res, next) {
  userService.getAll()
    .then(users => res.json(users))
    .catch(e => next(e))
}

function getCurrent(req, res, next) {
  userService.getById(req.user.sub)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(e => next(e))
}

function getById(req, res, next) {
  userService.getById(req.params.id)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(e => next(e))
}

function update(req, res, next) {
  userService.update(req.params.id, req.body)
    .then(() => res.json({ message: 'Success' }))
    .catch(e => next(e))
}

function _delete(req, res, next) {
  userService.deleteAcc(req.params.id)
    .then(() => res.json({ message: 'Success' }))
    .catch(e => next(e))
}

// export default router
module.exports = router