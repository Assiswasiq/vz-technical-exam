
class AccountController {

    constructor(AccountService) {
        this.__service = AccountService;
    }

    /**
     * Get account balance
     * GET: /get-all
     * @param {*} req 
     * @param {*} res 
     */
    async get(__req, res, next) {
        const response = await this.__service.getBalance();

        res.locals.data = { result: { ...response }, message_code: 'ACCOUNT_DETAILS_FETCHED_SUCCESSFULLY' }

        next();
    }

}

module.exports = AccountController;