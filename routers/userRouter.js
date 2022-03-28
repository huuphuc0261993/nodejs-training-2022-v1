const userController = require('../controllers/userController.js')
const router = require('express').Router()

router.get('/', userController.getUsers)

router.post('/', userController.addUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

module.exports = router