import '@babel/polyfill';

/**
 * Module dependencies.
 */
import express from 'express';
import http from 'http';
import chalk from 'chalk';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import routes from './routes/routes';

import { errorHandler } from './utils/error-handler';

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env' });

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/**
 * Routes.
 */
app.use('/api', routes);

// The error handler must be before any other error middleware and after all controllers

/**
 * Error Handler.
 */
app.use(errorHandler);

const server = http.createServer(app);

/**
 * Start Express server.
 */

server.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = server;
