import dotenv from 'dotenv';
import responses from '../config/codes.json';

dotenv.config({ path: '../.env' });

export const generateMessages = (code, validator) => {

    if(validator) {
        return responses[`${process.env.NODE_ENV}`][`${process.env.ENV_LANG}`]['validator'][`${code}`];
    }

    return responses[`${process.env.NODE_ENV}`][`${process.env.ENV_LANG}`][`${code}`];

};
