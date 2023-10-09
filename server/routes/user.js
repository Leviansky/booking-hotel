const userRoute = reqire('express').Router()
const { authUser, adminOnly } = require('../middleware/authentication')
const { UserController } = require('../controllers')

userRoute.post('/login', UserController.login)
userRoute.post('/register', UserController.register)
userRoute.get('/logout', UserController.logout)

module.exports = userRoute