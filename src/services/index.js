import TransactionService from './transaction.service';
import AccountService from './account.service';

import { FileHandler as fileHandler  } from '../shared';

module.exports = {
    TransactionService: new TransactionService(fileHandler),
    AccountService: new AccountService(fileHandler),
};
