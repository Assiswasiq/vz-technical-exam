
import { generateMessages } from '../utils/generate-message';

class TransactionController {

    constructor(TransactionService) {
        this.__service = TransactionService;
    }

    /**
     * Get transactions history
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async get(__req, res, next) {
        const response = await this.__service.getTransactionHistory();

        res.locals.data = { result: [ ...response ], message_code: 'TRANSACTION_HISTORY_FETCHED_SUCCESSFULLY' }

        next();
    }

    /**
     * Create transaction
     * @param {*} req 
     * @param {*} res 
     * @param {*} next 
     */
    async post(req, res, next) {
        try {

            const { body } = req;

            const response = await this.__service.createTransaction(body);

            res.locals.data = { result: { ...response }, message_code: 'TRANSACTION_CREATED_SUCCESSFULLY' }

            next();

        } catch (err) {
            next(err);
        }
    }

}

module.exports = TransactionController;