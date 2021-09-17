import express from 'express';

import RequestLoggerMiddleWare from '../utils/middleware/response-generator';

const transactionRoutes = express.Router();

/**
 * Transaction controllers (route handlers).
 */
const { TransactionController } = require('../controllers');

transactionRoutes
    .route('/')
    .get((...args) => TransactionController.get(...args), RequestLoggerMiddleWare.generate)
    .post((...args) => TransactionController.post(...args), RequestLoggerMiddleWare.generate);

module.exports = transactionRoutes;