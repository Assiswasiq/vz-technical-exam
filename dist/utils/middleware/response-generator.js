"use strict";var _generateMessage=require("../generate-message");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})}keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{Promise.resolve(value).then(_next,_throw)}}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(undefined)})}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var ResponseGeneratorMiddleWare=/*#__PURE__*/function(){function ResponseGeneratorMiddleWare(){_classCallCheck(this,ResponseGeneratorMiddleWare)}_createClass(ResponseGeneratorMiddleWare,[{key:"generate",value:function(){var _generate=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(req,res,next){var _res$locals$data,messageCode,resultData,message,resObjMessage;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:try{_res$locals$data=res.locals.data,messageCode=_res$locals$data.message_code,resultData=_res$locals$data.result,message=_res$locals$data.message;resObjMessage=messageCode?_objectSpread({},(0,_generateMessage.generateMessages)(messageCode)):{message:message};res.status(200).json(_objectSpread(_objectSpread({},resObjMessage),{},{status:200,result:resultData}))}catch(err){next(err)}case 1:case"end":return _context.stop();}}},_callee)}));function generate(_x,_x2,_x3){return _generate.apply(this,arguments)}return generate}()}]);return ResponseGeneratorMiddleWare}();module.exports=new ResponseGeneratorMiddleWare;
//# sourceMappingURL=response-generator.js.map