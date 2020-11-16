webpackHotUpdate_N_E("pages/index",{

/***/ "./component/FollowList.js":
/*!*********************************!*\
  !*** ./component/FollowList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

var _jsxFileName = "C:\\Users\\a\\Documents\\my_code\\nodeBirdApp\\front\\component\\FollowList.js";




function FollowList(_ref) {
  var _this = this;

  var header = _ref.header,
      data = _ref.data;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      marginBotton: '28px'
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    hader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 28
    }, this),
    loadMore: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        children: "\uB354\uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 69
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 18
    }, this),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(Item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        style: {
          marginTop: 20
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {}, "stop", false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 32
          }, _this)],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
            description: Item.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 16
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 12
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }, this);
}

_c = FollowList;
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c;

$RefreshReg$(_c, "FollowList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L0ZvbGxvd0xpc3QuanMiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJtYXJnaW5Cb3R0b24iLCJndXR0ZXIiLCJ4cyIsIm1kIiwidGV4dEFsaWduIiwibWFyZ2luIiwiSXRlbSIsIm1hcmdpblRvcCIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsT0FBb0M7QUFBQTs7QUFBQSxNQUFmQyxNQUFlLFFBQWZBLE1BQWU7QUFBQSxNQUFQQyxJQUFPLFFBQVBBLElBQU87QUFDaEMsc0JBQ0UscUVBQUMseUNBQUQ7QUFBTSxTQUFLLEVBQUU7QUFBQ0Msa0JBQVksRUFBQztBQUFkLEtBQWI7QUFDQyxRQUFJLEVBQUU7QUFBQ0MsWUFBTSxFQUFDLENBQVI7QUFBV0MsUUFBRSxFQUFDLENBQWQ7QUFBaUJDLFFBQUUsRUFBQztBQUFwQixLQURQO0FBRUMsUUFBSSxFQUFDLE9BRk47QUFFYyxTQUFLLGVBQUU7QUFBQSxnQkFBTUw7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRnJCO0FBR0MsWUFBUSxlQUFFO0FBQUssV0FBSyxFQUFFO0FBQUNNLGlCQUFTLEVBQUMsUUFBWDtBQUFxQkMsY0FBTSxFQUFDO0FBQTVCLE9BQVo7QUFBQSw2QkFBbUQscUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhYO0FBSUMsWUFBUSxNQUpUO0FBS0MsY0FBVSxFQUFFTixJQUxiO0FBTUMsY0FBVSxFQUFFLG9CQUFDTyxJQUFEO0FBQUEsMEJBQ1IscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBSyxFQUFFO0FBQUNDLG1CQUFTLEVBQUU7QUFBWixTQUFsQjtBQUFBLCtCQUNJLHFFQUFDLHlDQUFEO0FBQU0saUJBQU8sRUFBRSxjQUFDLHFFQUFDLDhEQUFELE1BQW9CLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUQsQ0FBZjtBQUFBLGlDQUNLLHFFQUFDLHlDQUFELENBQU0sSUFBTjtBQUFXLHVCQUFXLEVBQUVELElBQUksQ0FBQ0U7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQTtBQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCSDs7S0FsQlFYLFU7QUFvQk1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzNmQ5ZDE1MjM5ZTA4ODVkN2E1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0xpc3QsIEJ1dHRvbiwgQ2FyZH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7U3RvcE91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcclxuXHJcbmZ1bmN0aW9uIEZvbGxvd0xpc3Qoe2hlYWRlciwgZGF0YX0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMaXN0IHN0eWxlPXt7bWFyZ2luQm90dG9uOicyOHB4J319XHJcbiAgICAgICBncmlkPXt7Z3V0dGVyOjQsIHhzOjIsIG1kOjN9fSBcclxuICAgICAgIHNpemU9XCJzbWFsbFwiIGhhZGVyPXs8ZGl2PntoZWFkZXJ9PC9kaXY+fSBcclxuICAgICAgIGxvYWRNb3JlPXs8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOidjZW50ZXInLCBtYXJnaW46JzEwcHggMCd9fT48QnV0dG9uPuuNlOuztOq4sDwvQnV0dG9uPjwvZGl2Pn1cclxuICAgICAgIGJvcmRlcmVkXHJcbiAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgcmVuZGVySXRlbT17KEl0ZW0pID0+KFxyXG4gICAgICAgICAgIDxMaXN0Lkl0ZW0gc3R5bGU9e3ttYXJnaW5Ub3AgOjIwfX0+XHJcbiAgICAgICAgICAgICAgIDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleSA9IFwic3RvcFwiLz5dfT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXtJdGVtLm5pY2tuYW1lfS8+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICApfVxyXG5cclxuICAgICAgLz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdFxyXG4iXSwic291cmNlUm9vdCI6IiJ9