const customerRoute = require('express').Router();
const { CustomerController } = require('../controllers');

customerRoute.get('/', CustomerController.getAllCustomer);
customerRoute.post('/register', CustomerController.register);
customerRoute.get('/login', CustomerController.login);

module.exports = customerRoute;