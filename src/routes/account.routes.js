import express from 'express';

import RequestLoggerMiddleWare from '../utils/middleware/response-generator';

const accountRoutes = express.Router();

/**
 * Account controllers (route handlers).
 */
const { AccountController } = require('../controllers');

accountRoutes.get('/', (...args) => AccountController.get(...args), RequestLoggerMiddleWare.generate);

module.exports = accountRoutes;