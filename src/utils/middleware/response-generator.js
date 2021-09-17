import { generateMessages } from '../generate-message';

class ResponseGeneratorMiddleWare {

    constructor() {
    }

    async generate(req, res, next) {
        try {

            const { locals: { data: { message_code: messageCode, result: resultData, message } } } = res;

            const resObjMessage = messageCode ? {
                ...generateMessages(messageCode)
            } : {
                message
            }

            res.status(200).json({
                ...resObjMessage,
                status: 200,
                result: resultData
            });

        } catch (err) {
            next(err);
        }
    }

}

module.exports = new ResponseGeneratorMiddleWare();
