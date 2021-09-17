import {
    Helper
} from '../shared';

class AccountService extends Helper{

    constructor(fileHandler) {
        super();
        this.__fileHandler = fileHandler;
    }

    async getBalance() {
        return this.__fileHandler.readFile(__dirname, '../database/account.json');
    }

}

module.exports = AccountService;