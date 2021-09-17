"use strict";var _express=_interopRequireDefault(require("express"));var _account=_interopRequireDefault(require("./account.routes"));var _transaction=_interopRequireDefault(require("./transaction.routes"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var router=_express["default"].Router();/**
 * Routers (route handlers).
 */router.use("/",_account["default"]);router.use("/transactions",_transaction["default"]);module.exports=router;
//# sourceMappingURL=routes.js.map