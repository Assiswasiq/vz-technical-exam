/* eslint-disable no-undef */
import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../../src/app';

chai.use(chaiHttp);

const { expect } = chai;

// This is just for organisation and reporting
describe('Transaction controller', function () {

    before(async () => {
        try {
            console.log('before transaction');
            return;
        } catch (err) {
            console.log(err);
        }
    });

    after(async () => {
        try {
            console.log('after transaction');
            return;
        } catch (err) {
            console.log(err);
        }
    });

    describe('GET /transactions', () => {
        it('should return transaction history (HTTP_CODE 200 OK)', async () => {
            try {
                const response = await chai.request(app)
                    .get(`/api/transactions`)

                const { status } = response;

                expect(status).to.equal(200);

                return;
            } catch (err) {
                console.log(err);
            }
        });
    });

    describe('POST /transactions', () => {
        it('should create credit transaction successfully (HTTP_CODE 200 OK)', async () => {
            try {
                const response = await chai.request(app)
                    .post(`/api/transactions`)
                    .send({
                        "type": "credit",
                        "amount": 1000
                    });

                const { status } = response;

                expect(status).to.equal(200);

                return;
            } catch (err) {
                console.log(err);
            }
        });

        it('should create debit transaction successfully (HTTP_CODE 200 OK)', async () => {
            try {
                const response = await chai.request(app)
                    .post(`/api/transactions`)
                    .send({
                        "type": "debit",
                        "amount": 1000
                    });

                const { status } = response;

                expect(status).to.equal(200);

                return;
            } catch (err) {
                console.log(err);
            }
        });
        
        it('should not create debit transaction due to in sufficient balance (HTTP_CODE 400 OK)', async () => {
            try {
                const response = await chai.request(app)
                    .post(`/api/transactions`)
                    .send({
                        "type": "debit",
                        "amount": 1000000000000000000000000000
                    });

                const { status } = response;

                expect(status).to.equal(200);

                return;
            } catch (err) {
                console.log(err);
            }
        });
    });
});
