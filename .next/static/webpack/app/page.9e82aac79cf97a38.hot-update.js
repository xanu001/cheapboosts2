"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/VouchesSection.jsx":
/*!***************************************!*\
  !*** ./components/VouchesSection.jsx ***!
  \***************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _s = $RefreshSig$();\n\n\nconst VouchesSection = ()=>{\n    _s();\n    const [vouches, setVouches] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n    const [displayCount, setDisplayCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(6);\n    const [isLoadingMore, setIsLoadingMore] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const fetchVouches = async ()=>{\n            try {\n                const response = await fetch('https://myvouch.es/api/vouches/cheapboosts');\n                if (!response.ok) throw new Error('Failed to fetch vouches');\n                const data = await response.json();\n                // Sort vouches by date in descending order (newest first)\n                const sortedVouches = data.sort((a, b)=>new Date(b.date) - new Date(a.date));\n                setVouches(sortedVouches);\n            } catch (err) {\n                console.error('Error fetching vouches:', err);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchVouches();\n    }, []);\n// ... rest of the component code ...\n};\n_s(VouchesSection, \"Sf38dLUgOOL6FEfcWBDA6RL4tpo=\");\n_c = VouchesSection;\n// Add this to your global CSS file\nconst styles = \"\\n@keyframes fadeSlideIn {\\n  from {\\n    opacity: 0;\\n    transform: translateY(20px);\\n  }\\n  to {\\n    opacity: 1;\\n    transform: translateY(0);\\n  }\\n}\\n\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VouchesSection);\nvar _c;\n$RefreshReg$(_c, \"VouchesSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVm91Y2hlc1NlY3Rpb24uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDUTtBQUUzRCxNQUFNTSxpQkFBaUI7O0lBQ3JCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNVLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNZLGVBQWVDLGlCQUFpQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUVuREMsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxlQUFlO1lBQ25CLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixJQUFJLENBQUNELFNBQVNFLEVBQUUsRUFBRSxNQUFNLElBQUlDLE1BQU07Z0JBQ2xDLE1BQU1DLE9BQU8sTUFBTUosU0FBU0ssSUFBSTtnQkFFaEMsMERBQTBEO2dCQUMxRCxNQUFNQyxnQkFBZ0JGLEtBQUtHLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNLElBQUlDLEtBQUtELEVBQUVFLElBQUksSUFBSSxJQUFJRCxLQUFLRixFQUFFRyxJQUFJO2dCQUU1RW5CLFdBQVdjO1lBQ2IsRUFBRSxPQUFPTSxLQUFLO2dCQUNaQyxRQUFRQyxLQUFLLENBQUMsMkJBQTJCRjtZQUMzQyxTQUFVO2dCQUNSbEIsV0FBVztZQUNiO1FBQ0Y7UUFFQUs7SUFDRixHQUFHLEVBQUU7QUFFTCxxQ0FBcUM7QUFDdkM7R0E1Qk1UO0tBQUFBO0FBOEJOLG1DQUFtQztBQUNuQyxNQUFNeUIsU0FBVTtBQWFoQixpRUFBZXpCLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Wb3VjaGVzU2VjdGlvbi5qc3g/MWU0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgU3RhciwgQ2hldnJvbkRvd24sIFNwYXJrbGVzIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcclxuXHJcbmNvbnN0IFZvdWNoZXNTZWN0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt2b3VjaGVzLCBzZXRWb3VjaGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbZGlzcGxheUNvdW50LCBzZXREaXNwbGF5Q291bnRdID0gdXNlU3RhdGUoNik7XHJcbiAgY29uc3QgW2lzTG9hZGluZ01vcmUsIHNldElzTG9hZGluZ01vcmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hWb3VjaGVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbXl2b3VjaC5lcy9hcGkvdm91Y2hlcy9jaGVhcGJvb3N0cycpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIHZvdWNoZXMnKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAvLyBTb3J0IHZvdWNoZXMgYnkgZGF0ZSBpbiBkZXNjZW5kaW5nIG9yZGVyIChuZXdlc3QgZmlyc3QpXHJcbiAgICAgICAgY29uc3Qgc29ydGVkVm91Y2hlcyA9IGRhdGEuc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpO1xyXG5cclxuICAgICAgICBzZXRWb3VjaGVzKHNvcnRlZFZvdWNoZXMpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB2b3VjaGVzOicsIGVycik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hWb3VjaGVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyAuLi4gcmVzdCBvZiB0aGUgY29tcG9uZW50IGNvZGUgLi4uXHJcbn07XHJcblxyXG4vLyBBZGQgdGhpcyB0byB5b3VyIGdsb2JhbCBDU1MgZmlsZVxyXG5jb25zdCBzdHlsZXMgPSBgXHJcbkBrZXlmcmFtZXMgZmFkZVNsaWRlSW4ge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZvdWNoZXNTZWN0aW9uOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU3RhciIsIkNoZXZyb25Eb3duIiwiU3BhcmtsZXMiLCJWb3VjaGVzU2VjdGlvbiIsInZvdWNoZXMiLCJzZXRWb3VjaGVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkaXNwbGF5Q291bnQiLCJzZXREaXNwbGF5Q291bnQiLCJpc0xvYWRpbmdNb3JlIiwic2V0SXNMb2FkaW5nTW9yZSIsImZldGNoVm91Y2hlcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJzb3J0ZWRWb3VjaGVzIiwic29ydCIsImEiLCJiIiwiRGF0ZSIsImRhdGUiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdHlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/VouchesSection.jsx\n"));

/***/ })

});