"use strict";require("@babel/polyfill");var _express=_interopRequireDefault(require("express"));var _http=_interopRequireDefault(require("http"));var _chalk=_interopRequireDefault(require("chalk"));var _bodyParser=_interopRequireDefault(require("body-parser"));var _dotenv=_interopRequireDefault(require("dotenv"));var _routes=_interopRequireDefault(require("./routes/routes"));var _errorHandler=require("./utils/error-handler");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}/**
 * Module dependencies.
 */ /**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */_dotenv["default"].config({path:".env"});/**
 * Create Express server.
 */var app=(0,_express["default"])();/**
 * Express configuration.
 */app.set("host",process.env.OPENSHIFT_NODEJS_IP||"0.0.0.0");app.set("port",process.env.PORT||8080);app.use(_bodyParser["default"].json());app.use(_bodyParser["default"].urlencoded({extended:true}));/**
 * Routes.
 */app.use("/api",_routes["default"]);// The error handler must be before any other error middleware and after all controllers
/**
 * Error Handler.
 */app.use(_errorHandler.errorHandler);var server=_http["default"].createServer(app);/**
 * Start Express server.
 */server.listen(app.get("port"),function(){console.log("%s App is running at http://localhost:%d in %s mode",_chalk["default"].green("\u2713"),app.get("port"),app.get("env"));console.log("  Press CTRL-C to stop\n")});module.exports=server;
//# sourceMappingURL=app.js.map