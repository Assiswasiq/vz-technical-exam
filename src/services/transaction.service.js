import fs from 'fs';
import util from 'util';
import { v4 as uuidv1 } from 'uuid';

import {
    Helper
} from '../shared';

import {
    generateMessages
} from '../utils/generate-message';

class TransactionService extends Helper {

    constructor(fileHandler) {
        super();
        this.__fileHandler = fileHandler;
        this.__method = {
            credit: 'creditAccount',
            debit: 'debitAccount'
        }
    }

    async getTransactionHistory() {
        return this.__fileHandler.readFile(__dirname, '../database/transactions.json');
    }

    async createTransaction(data) {
        const accountDetails = await this.__fileHandler.readFile(__dirname, '../database/account.json');
        const existedTransactions = await this.__fileHandler.readFile(__dirname, '../database/transactions.json');
        const newTransaction = { 'id': uuidv1(), ...data, 'effectiveDate': this.createCurrentTimestamp()};
        await this.__fileHandler.writeFile(__dirname, '../database/account.json', { 'balance': await this[this.__method[data.type]](accountDetails.balance, data.amount) })
        await this.__fileHandler.writeFile(__dirname, '../database/transactions.json', [...existedTransactions, { ...newTransaction }])
        return newTransaction
    }

    async creditAccount(accountBalance, amount) {
        return accountBalance + amount;
    }

    async debitAccount(accountBalance, amount) {
        if(amount > accountBalance) throw generateMessages('IN_SUFFICIENT_BALANCE')
        return accountBalance - amount;
    }

}

module.exports = TransactionService;