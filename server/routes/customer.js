const customerRoute = require('express').Router();
const { CustomerController } = require('../controllers');
const { authAdmin, authUser } = require('../middleware/authentication')

//ALL USER
customerRoute.post('/register', CustomerController.register);
customerRoute.post('/login', CustomerController.login);
customerRoute.put('/edit', authUser, CustomerController.edit)

//ADMIN
customerRoute.get('/', authAdmin, CustomerController.getAllCustomer);
customerRoute.delete('/:UserId', authAdmin, CustomerController.deleteUser)

module.exports = customerRoute;