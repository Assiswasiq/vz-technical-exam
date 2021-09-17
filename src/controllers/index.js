import { 
    TransactionService as transactionService,
    AccountService as accountService
} from '../services';

import AccountController from './account.controller';
import TransactionController from './transaction.controller';

module.exports = {
    AccountController: new AccountController(
        accountService
    ),
    TransactionController: new TransactionController(
        transactionService
    )
};
