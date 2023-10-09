const customerRoute = require('express').Router();
const { CustomerController } = require('../controllers');
const authUser = require('../middleware/authentication')

customerRoute.get('/', authUser, CustomerController.getAllCustomer);
customerRoute.post('/register', CustomerController.register);
customerRoute.get('/login', CustomerController.login);

module.exports = customerRoute;