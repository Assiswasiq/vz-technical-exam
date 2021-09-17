import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, json } = format;

import dotenv from 'dotenv';

dotenv.config({ path: '.env' });


const logger = createLogger({
    format: 
    combine(
        label({ label: `${process.env.NODE_ENV }` }),
        timestamp(),
        json(),
    ),
    transports: [
        new (transports.Console)({
            timestamp: true,
            level: 'error',
            colorize: true,
        })
    ]
});

if (process.env.NODE_ENV !== 'prod') {
    logger.debug('Logging initialized at debug level');
}

module.exports = logger;
