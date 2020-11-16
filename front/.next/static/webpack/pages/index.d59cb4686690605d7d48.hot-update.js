webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/component/NickNameEditForm.js":
/*!*********************************************!*\
  !*** ./pages/component/NickNameEditForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");


var _jsxFileName = "C:\\Users\\a\\Documents\\my_code\\nodeBirdApp\\front\\pages\\component\\NickNameEditForm.js",
    _s = $RefreshSig$();




function NickNameEditForm() {
  _s();

  var style = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      marginBottom: '20px',
      border: '1px solid '
    };
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    style: style,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
      adonBefor: "\uB2C9\uB124\uC784",
      enterButton: "\uC218\uC815"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

_s(NickNameEditForm, "03TOej/Atx47IHUj0GasUXSIbAc=");

_c = NickNameEditForm;
/* harmony default export */ __webpack_exports__["default"] = (NickNameEditForm);

var _c;

$RefreshReg$(_c, "NickNameEditForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/component/UserProfile.js":
/*!****************************************!*\
  !*** ./pages/component/UserProfile.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _pages_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/profile */ "./pages/profile.js");

var _jsxFileName = "C:\\Users\\a\\Documents\\my_code\\nodeBirdApp\\front\\pages\\component\\UserProfile.js";




function UserProfile(_ref) {
  var _s = $RefreshSig$();

  var setIsLoggedIn = _ref.setIsLoggedIn;

  var onLogOut = function onLogOut() {
    _s();

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(setIsLoggedIn(false), []);
  };

  _s(onLogOut, "epj4qY15NHsef74wNqHIp5fdZmg=");

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 33
        }, this), "\uD2B8\uC717"]
      }, "twit", true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 35
        }, this), "\uD314\uB85C\uC6B0"]
      }, "follow", true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 29
        }, this), "\uCDE8\uC18C"]
      }, "", true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this)],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: onLogOut,
        children: "\uB85C\uADF8\uC544\uC6C3"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          children: "hello"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 36
        }, this),
        title: "gigle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

_c = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "UserProfile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/AppLayout */ "./pages/component/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_NickNameEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/NickNameEditForm */ "./pages/component/NickNameEditForm.js");
/* harmony import */ var _component_UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/UserProfile */ "./pages/component/UserProfile.js");


var _jsxFileName = "C:\\Users\\a\\Documents\\my_code\\nodeBirdApp\\front\\pages\\profile.js";


 //next 에서 head 는 지원해준다.




function profile() {
  var followerList = [{
    nickName: '김군'
  }, {
    nickName: '이군'
  }, {
    nickName: '박군'
  }];
  var followingList = [{
    nickName: '김군1'
  }, {
    nickName: '이군2'
  }, {
    nickName: '박군3'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "profile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_AppLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_NickNameEditForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
          hader: "\uD314\uB85C\uC789\uBAA9\uB85D",
          data: followerList
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_UserProfile__WEBPACK_IMPORTED_MODULE_5__["default"], {
          hader: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
          data: followingList
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (profile);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50L05pY2tOYW1lRWRpdEZvcm0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudC9Vc2VyUHJvZmlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJOaWNrTmFtZUVkaXRGb3JtIiwic3R5bGUiLCJ1c2VNZW1vIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyIiwiVXNlclByb2ZpbGUiLCJzZXRJc0xvZ2dlZEluIiwib25Mb2dPdXQiLCJ1c2VDYWxsYmFjayIsInByb2ZpbGUiLCJmb2xsb3dlckxpc3QiLCJuaWNrTmFtZSIsImZvbGxvd2luZ0xpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsR0FBNEI7QUFBQTs7QUFFNUIsTUFBTUMsS0FBSyxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBSztBQUFDQyxrQkFBWSxFQUFFLE1BQWY7QUFBdUJDLFlBQU0sRUFBQztBQUE5QixLQUFMO0FBQUEsR0FBRCxDQUFyQjtBQUVJLHNCQUNJLHFFQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFFSCxLQUFiO0FBQUEsMkJBQ0kscUVBQUMsMENBQUQsQ0FBTyxNQUFQO0FBQWMsZUFBUyxFQUFDLG9CQUF4QjtBQUE4QixpQkFBVyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7R0FUUUQsZ0I7O0tBQUFBLGdCO0FBV01BLCtFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBOztBQUVBLFNBQVNLLFdBQVQsT0FBc0M7QUFBQTs7QUFBQSxNQUFoQkMsYUFBZ0IsUUFBaEJBLGFBQWdCOztBQUVsQyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFLO0FBQUE7O0FBQUVDLDZEQUFXLENBQUNGLGFBQWEsQ0FBQyxLQUFELENBQWQsRUFBc0IsRUFBdEIsQ0FBWDtBQUN2QixHQUREOztBQUZrQyxLQUU1QkMsUUFGNEI7O0FBS2xDLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMseUNBQUQ7QUFBTSxhQUFPLEVBQUUsY0FDWDtBQUFBLGdDQUFnQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFoQjtBQUFBLFNBQVMsTUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFcsZUFFWDtBQUFBLGdDQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFsQjtBQUFBLFNBQVMsUUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRlcsZUFHWDtBQUFBLGdDQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVo7QUFBQSxTQUFTLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhXLENBQWY7QUFBQSw4QkFLQSxxRUFBQywyQ0FBRDtBQUFRLGVBQU8sRUFBRUEsUUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMQSxlQU1JLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLGNBQU0sZUFBRSxxRUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBbkI7QUFBMkMsYUFBSyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7S0FqQlFGLFc7QUFtQk1BLDBFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0NBQzhCOztBQUM5QjtBQUNBOztBQUVBLFNBQVNJLE9BQVQsR0FBbUI7QUFDZixNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFDQyxZQUFRLEVBQUU7QUFBWCxHQUFELEVBQW1CO0FBQUNBLFlBQVEsRUFBQztBQUFWLEdBQW5CLEVBQW9DO0FBQUNBLFlBQVEsRUFBQztBQUFWLEdBQXBDLENBQXJCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLENBQUM7QUFBQ0QsWUFBUSxFQUFFO0FBQVgsR0FBRCxFQUFvQjtBQUFDQSxZQUFRLEVBQUM7QUFBVixHQUFwQixFQUFzQztBQUFDQSxZQUFRLEVBQUM7QUFBVixHQUF0QyxDQUF0QjtBQUNBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJLHFFQUFDLDREQUFEO0FBQUEsNkJBQ0kscUVBQUMsbUVBQUQ7QUFBQSxnQ0FDSSxxRUFBQyw4REFBRDtBQUFZLGVBQUssRUFBQyxnQ0FBbEI7QUFBMEIsY0FBSSxFQUFFRDtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsOERBQUQ7QUFBWSxlQUFLLEVBQUMsaUNBQWxCO0FBQTJCLGNBQUksRUFBRUU7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQSxrQkFESjtBQWFIOztBQUdjSCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNTljYjQ2ODY2OTA2MDVkN2Q0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICx7dXNlTWVtb31mcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGb3JtLCBJbnB1dH0gZnJvbSAnYW50ZCdcclxuXHJcbmZ1bmN0aW9uIE5pY2tOYW1lRWRpdEZvcm0oKSB7XHJcblxyXG5jb25zdCBzdHlsZSA9IHVzZU1lbW8oKCk9Pih7bWFyZ2luQm90dG9tOiAnMjBweCcsIGJvcmRlcjonMXB4IHNvbGlkICd9KSkgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBzdHlsZT17c3R5bGV9PlxyXG4gICAgICAgICAgICA8SW5wdXQuU2VhcmNoIGFkb25CZWZvcj1cIuuLieuEpOyehFwiIGVudGVyQnV0dG9uPVwi7IiY7KCVXCI+PC9JbnB1dC5TZWFyY2g+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOaWNrTmFtZUVkaXRGb3JtXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZUNhbGxiYWNrLHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q2FyZCwgQnV0dG9uLCBBdmF0YXJ9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuLi8uLi9wYWdlcy9wcm9maWxlJ1xyXG5cclxuZnVuY3Rpb24gVXNlclByb2ZpbGUoe3NldElzTG9nZ2VkSW59KSB7XHJcbiAgICBcclxuICAgIGNvbnN0IG9uTG9nT3V0ID0gKCkgPT57IHVzZUNhbGxiYWNrKHNldElzTG9nZ2VkSW4oZmFsc2UpLFtdKVxyXG4gICAgfVxyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInR3aXRcIj48YnIvPu2KuOyclzwvZGl2PixcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93XCI+PGJyLz7tjJTroZzsmrA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIlwiPjxici8+7Leo7IaMPC9kaXY+LFxyXG4gICAgICAgICAgICBdfT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkxvZ091dH0+66Gc6re47JWE7JuDPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGF2YXRhcj17PEF2YXRhcj5oZWxsbzwvQXZhdGFyPn0gdGl0bGU9XCJnaWdsZVwiLz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4vY29tcG9uZW50L0FwcExheW91dCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJyAgLy9uZXh0IOyXkOyEnCBoZWFkIOuKlCDsp4Dsm5DtlbTspIDri6QuXHJcbmltcG9ydCBOaWNrTmFtZUVkaXRGb3JtIGZyb20gJy4vY29tcG9uZW50L05pY2tOYW1lRWRpdEZvcm0nO1xyXG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tICcuL2NvbXBvbmVudC9Vc2VyUHJvZmlsZSdcclxuXHJcbmZ1bmN0aW9uIHByb2ZpbGUoKSB7XHJcbiAgICBjb25zdCBmb2xsb3dlckxpc3QgPSBbe25pY2tOYW1lOiAn6rmA6rWwJ30sIHtuaWNrTmFtZTon7J206rWwJ30sIHtuaWNrTmFtZTon67CV6rWwJ31dO1xyXG4gICAgY29uc3QgZm9sbG93aW5nTGlzdCA9IFt7bmlja05hbWU6ICfquYDqtbAxJ30sIHtuaWNrTmFtZTon7J206rWwMid9LCB7bmlja05hbWU6J+uwleq1sDMnfV07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnByb2ZpbGU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Tmlja05hbWVFZGl0Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9sbG93TGlzdCBoYWRlcj1cIu2MlOuhnOyeieuqqeuhnVwiIGRhdGE9e2ZvbGxvd2VyTGlzdH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhhZGVyPVwi7YyU66Gc7JuMIOuqqeuhnVwiIGRhdGE9e2ZvbGxvd2luZ0xpc3R9Lz5cclxuICAgICAgICAgICAgICAgIDwvTmlja05hbWVFZGl0Rm9ybT5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=