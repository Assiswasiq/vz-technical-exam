import express from 'express';

import accountRoutes from './account.routes';
import transactionRoutes from './transaction.routes';

const router = express.Router();

/**
 * Routers (route handlers).
 */
router.use('/', accountRoutes);
router.use('/transactions', transactionRoutes);


module.exports = router;