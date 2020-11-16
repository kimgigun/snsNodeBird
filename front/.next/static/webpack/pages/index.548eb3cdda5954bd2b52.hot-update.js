webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _component_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/AppLayout */ "./component/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_NickNameEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/NickNameEditForm */ "./component/NickNameEditForm.js");
/* harmony import */ var _component_FollowList_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/FollowList.js */ "./component/FollowList.js");


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
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_FollowList_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          header: "\uD314\uB85C\uC789\uBAA9\uB85D",
          data: followerList
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_FollowList_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
          header: "\uD314\uB85C\uC6CC \uBAA9\uB85D",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJwcm9maWxlIiwiZm9sbG93ZXJMaXN0Iiwibmlja05hbWUiLCJmb2xsb3dpbmdMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FDOEI7O0FBQzlCO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUNmLE1BQU1DLFlBQVksR0FBRyxDQUFDO0FBQUNDLFlBQVEsRUFBRTtBQUFYLEdBQUQsRUFBbUI7QUFBQ0EsWUFBUSxFQUFDO0FBQVYsR0FBbkIsRUFBb0M7QUFBQ0EsWUFBUSxFQUFDO0FBQVYsR0FBcEMsQ0FBckI7QUFDQSxNQUFNQyxhQUFhLEdBQUcsQ0FBQztBQUFDRCxZQUFRLEVBQUU7QUFBWCxHQUFELEVBQW9CO0FBQUNBLFlBQVEsRUFBQztBQUFWLEdBQXBCLEVBQXNDO0FBQUNBLFlBQVEsRUFBQztBQUFWLEdBQXRDLENBQXRCO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUkscUVBQUMsNERBQUQ7QUFBQSw2QkFDSSxxRUFBQyxtRUFBRDtBQUFBLGdDQUNJLHFFQUFDLGdFQUFEO0FBQVksZ0JBQU0sRUFBQyxnQ0FBbkI7QUFBMkIsY0FBSSxFQUFFRDtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsZ0VBQUQ7QUFBWSxnQkFBTSxFQUFDLGlDQUFuQjtBQUE0QixjQUFJLEVBQUVFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUEsa0JBREo7QUFhSDs7QUFHY0gsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTQ4ZWIzY2RkYTU5NTRiZDJiNTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnQvQXBwTGF5b3V0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnICAvL25leHQg7JeQ7IScIGhlYWQg64qUIOyngOybkO2VtOykgOuLpC5cclxuaW1wb3J0IE5pY2tOYW1lRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50L05pY2tOYW1lRWRpdEZvcm0nO1xyXG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tICcuLi9jb21wb25lbnQvRm9sbG93TGlzdC5qcydcclxuXHJcbmZ1bmN0aW9uIHByb2ZpbGUoKSB7XHJcbiAgICBjb25zdCBmb2xsb3dlckxpc3QgPSBbe25pY2tOYW1lOiAn6rmA6rWwJ30sIHtuaWNrTmFtZTon7J206rWwJ30sIHtuaWNrTmFtZTon67CV6rWwJ31dO1xyXG4gICAgY29uc3QgZm9sbG93aW5nTGlzdCA9IFt7bmlja05hbWU6ICfquYDqtbAxJ30sIHtuaWNrTmFtZTon7J206rWwMid9LCB7bmlja05hbWU6J+uwleq1sDMnfV07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnByb2ZpbGU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Tmlja05hbWVFZGl0Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsnonrqqnroZ1cIiBkYXRhPXtmb2xsb3dlckxpc3R9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsm4wg66qp66GdXCIgZGF0YT17Zm9sbG93aW5nTGlzdH0vPlxyXG4gICAgICAgICAgICAgICAgPC9OaWNrTmFtZUVkaXRGb3JtPlxyXG4gICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGVcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==