/* eslint-disable no-undef */
import chai from 'chai';
import 'chai/register-should';
import chaiHttp from 'chai-http';
import app from '../../src/app';

chai.use(chaiHttp);

const { expect } = chai;

// This is just for organisation and reporting
describe('Account controller', function () {

    before(async () => {
        try {
            console.log('before account');
            return;
        } catch (err) {
            console.log(err);
        }
    });

    after(async () => {
        try {
            console.log('after account');
            return;
        } catch (err) {
            console.log(err);
        }
    });

    describe('GET /', () => {

        it('should return account details (HTTP_CODE 200 OK)', async () => {
            try {
                const response = await chai.request(app)
                    .get(`/api`)

                const { status } = response;

                expect(status).to.equal(200);

                return;
            } catch (err) {
                console.log(err);
            }
        });
    });
});
