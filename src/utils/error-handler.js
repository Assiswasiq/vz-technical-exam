import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

export const errorHandler = (error, req, res, next) => {

    console.log(error);

    if (error.stack && process.env.NODE_ENV === 'development') {

        console.log(error);

        console.error({
            message: error.message || error.name
        });
    }

    if (error.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json(error);
    }

    if (error.code === 11000) {
        return res.status(400).json(error);
    }

    if (error.stack && process.env.NODE_ENV === 'development') {
        console.error(error, error.stack);
    }


    if (error.errors) {
        return res.status(400).json({
            message: 'Invalid request',
            errors: error.errors
        });
    }

    return res.status(error.status || 500).json({
        message: error.message || error.name || error,
        status: error.status 
    });
};
