const express = require('express');
const customerController = require('./customer.controller');

const customerRoutes = express.Router();

customerRoutes.post('/customers', customerController.insert);
customerRoutes.get('/customers', customerController.getAll);

module.exports = customerRoutes;
