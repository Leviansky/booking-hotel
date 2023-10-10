const customerRoute = require('express').Router();
const { CustomerController } = require('../controllers');
const { authAdmin } = require('../middleware/authentication')

customerRoute.get('/', authAdmin, CustomerController.getAllCustomer);
customerRoute.post('/register', CustomerController.register);
customerRoute.get('/login', CustomerController.login);

module.exports = customerRoute;