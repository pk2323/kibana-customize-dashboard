webpackJsonp([5],{1157:function(module,exports,__webpack_require__){"use strict";__webpack_require__(14),__webpack_require__(1462),__webpack_require__(236),__webpack_require__(237),__webpack_require__(238),__webpack_require__(171),__webpack_require__(239),__webpack_require__(14).bootstrap()},1462:function(module,exports,__webpack_require__){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}__webpack_require__(301);var _chrome=__webpack_require__(14),_chrome2=_interopRequireDefault(_chrome),_state_hashing=__webpack_require__(440),_routes=__webpack_require__(26),_routes2=_interopRequireDefault(_routes);_routes2.default.enable(),_routes2.default.when("/",{resolve:{url:function(AppState,globalState,$window){var redirectUrl=_chrome2.default.getInjected("redirectUrl"),hashedUrl=(0,_state_hashing.hashUrl)([new AppState,globalState],redirectUrl),url=_chrome2.default.addBasePath(hashedUrl);$window.location=url}}})}},[1157]);