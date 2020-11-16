webpackHotUpdate_N_E("pages/signup",{

/***/ "./component/UserProfile.js":
/*!**********************************!*\
  !*** ./component/UserProfile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var _jsxFileName = "C:\\Users\\a\\Documents\\my_code\\nodeBirdApp\\front\\component\\UserProfile.js";


function UserProfile(_ref) {
  var _s = $RefreshSig$();

  var setIsLoggedIn = _ref.setIsLoggedIn;

  var onLogOut = function onLogOut() {
    _s();

    return useCallback(setIsLoggedIn(false), []);
  };

  _s(onLogOut, "epj4qY15NHsef74wNqHIp5fdZmg=");

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          children: "hello"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 32
        }, this),
        title: "gigle"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: onLogOut,
        children: "\uB85C\uADF8\uC544\uC6C3"
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1VzZXJQcm9maWxlLmpzIl0sIm5hbWVzIjpbIlVzZXJQcm9maWxlIiwic2V0SXNMb2dnZWRJbiIsIm9uTG9nT3V0IiwidXNlQ2FsbGJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFHQSxTQUFTQSxXQUFULE9BQXNDO0FBQUE7O0FBQUEsTUFBaEJDLGFBQWdCLFFBQWhCQSxhQUFnQjs7QUFFbEMsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQTs7QUFBQSxXQUFPQyxXQUFXLENBQUNGLGFBQWEsQ0FBQyxLQUFELENBQWQsRUFBc0IsRUFBdEIsQ0FBbEI7QUFBQSxHQUFqQjs7QUFGa0MsS0FFNUJDLFFBRjRCOztBQUtsQyxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLHlDQUFEO0FBQU0sYUFBTyxFQUFFLGNBQ1g7QUFBQSxnQ0FBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBaEI7QUFBQSxTQUFTLE1BQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURXLGVBRVg7QUFBQSxnQ0FBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBbEI7QUFBQSxTQUFTLFFBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZXLGVBR1g7QUFBQSxnQ0FBWTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFaO0FBQUEsU0FBUyxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIVyxDQUFmO0FBQUEsOEJBS0EscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsY0FBTSxlQUFFLHFFQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFuQjtBQUEyQyxhQUFLLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxBLGVBTUkscUVBQUMsMkNBQUQ7QUFBUSxlQUFPLEVBQUVBLFFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7O0tBbEJRRixXO0FBb0JNQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuMzRmNmYyMjIyNDUxYzFmMDA1MDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge0NhcmQsIEJ1dHRvbiwgQXZhdGFyfSBmcm9tICdhbnRkJztcclxuXHJcblxyXG5mdW5jdGlvbiBVc2VyUHJvZmlsZSh7c2V0SXNMb2dnZWRJbn0pIHtcclxuICAgIFxyXG4gICAgY29uc3Qgb25Mb2dPdXQgPSAoKSA9PiAodXNlQ2FsbGJhY2soc2V0SXNMb2dnZWRJbihmYWxzZSksW10pXHJcbiAgICApO1xyXG4gICAgICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZCBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cInR3aXRcIj48YnIvPu2KuOyclzwvZGl2PixcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PVwiZm9sbG93XCI+PGJyLz7tjJTroZzsmrA8L2Rpdj4sXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT1cIlwiPjxici8+7Leo7IaMPC9kaXY+LFxyXG4gICAgICAgICAgICBdfT5cclxuICAgICAgICAgICAgPENhcmQuTWV0YSBhdmF0YXI9ezxBdmF0YXI+aGVsbG88L0F2YXRhcj59IHRpdGxlPVwiZ2lnbGVcIi8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uTG9nT3V0fT7roZzqt7jslYTsm4M8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUHJvZmlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==