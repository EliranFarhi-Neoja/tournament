"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/managers/addteams/page",{

/***/ "(app-pages-browser)/./src/app/managers/addteams/page.tsx":
/*!********************************************!*\
  !*** ./src/app/managers/addteams/page.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_components_btnleft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/components/btnleft */ \"(app-pages-browser)/./src/app/components/btnleft.tsx\");\n/* harmony import */ var _app_components_btnright__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/btnright */ \"(app-pages-browser)/./src/app/components/btnright.tsx\");\n/* harmony import */ var _app_components_tournamentname__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/components/tournamentname */ \"(app-pages-browser)/./src/app/components/tournamentname.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst AddTeams = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen relative flex flex-col items-center justify-center text-white\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative orange-yellow-gradient w-[52%] h-[60%] flex flex-col justify-center items-center rounded-xl pb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center pt-14 pb-6\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-4xl font-bold\",\n                            children: \"Add a Team\"\n                        }, void 0, false, {\n                            fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-8 flex-wrap justify-center overflow-y-auto pt-4 pb-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"relative h-full flex flex-col items-center justify-center\",\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex-grow overflow-y-auto max-h-[80%] w-full px-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"py-3\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                placeholder: \"Enter Team Name\",\n                                                value: teamName,\n                                                className: \"rounded-lg py-2 px-3 w-full font-bold text-gray-700\",\n                                                onChange: (e)=>setTeamName(e.target.value),\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                                                lineNumber: 23,\n                                                columnNumber: 15\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 13\n                                        }, undefined),\n                                        players.map((player, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"py-3\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    placeholder: \"Enter Player-\".concat(index + 1, \" Name\"),\n                                                    value: player,\n                                                    className: \"rounded-lg py-2 px-3 w-full font-bold text-gray-700\",\n                                                    onChange: (e)=>handlePlayerChange(index, e.target.value),\n                                                    required: true\n                                                }, void 0, false, {\n                                                    fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 17\n                                                }, undefined)\n                                            }, index, false, {\n                                                fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                                                lineNumber: 34,\n                                                columnNumber: 15\n                                            }, undefined))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                                    lineNumber: 21,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute -top-7\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-screen flex justify-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"bg-lightYellow text-2xl font-bold p-2 px-4 rounded-xl shadow-2xl\",\n                                            children: \"Fill Form\"\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 13\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 11\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute -bottom-7\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-screen text-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"bg-lightYellow text-2xl font-bold p-2 px-4 rounded-xl shadow-2xl\",\n                                            children: \"Submit\"\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute -top-9\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-lightYellow p-3 px-5 rounded-xl shadow-xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_tournamentname__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-10 left-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_btnleft__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    route: \"/managers/menu\"\n                }, void 0, false, {\n                    fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-10 right-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_btnright__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/managers/addteams/page.tsx\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_c = AddTeams;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTeams);\nvar _c;\n$RefreshReg$(_c, \"AddTeams\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFuYWdlcnMvYWRkdGVhbXMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJMEI7QUFFdUI7QUFDRTtBQUNVO0FBRTdELE1BQU1JLFdBQXFCO0lBQ3ZCLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0M7NEJBQUVELFdBQVU7c0NBQXFCOzs7Ozs7Ozs7OztrQ0FFdEMsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNmLDRFQUFDRTs0QkFBS0YsV0FBVTs0QkFBNERHLFVBQVVDOzs4Q0FFNUYsOERBQUNMO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0Q7NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNLO2dEQUNDQyxNQUFLO2dEQUNMQyxhQUFZO2dEQUNaQyxPQUFPQztnREFDUFQsV0FBVTtnREFDVlUsVUFBVSxDQUFDQyxJQUFNQyxZQUFZRCxFQUFFRSxNQUFNLENBQUNMLEtBQUs7Z0RBQzNDTSxRQUFROzs7Ozs7Ozs7Ozt3Q0FJWEMsUUFBUUMsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUNwQiw4REFBQ25CO2dEQUFJQyxXQUFVOzBEQUNiLDRFQUFDSztvREFDQ0MsTUFBSztvREFDTEMsYUFBYSxnQkFBMEIsT0FBVlcsUUFBUSxHQUFFO29EQUN2Q1YsT0FBT1M7b0RBQ1BqQixXQUFVO29EQUNWVSxVQUFVLENBQUNDLElBQU1RLG1CQUFtQkQsT0FBT1AsRUFBRUUsTUFBTSxDQUFDTCxLQUFLO29EQUN6RE0sUUFBUTs7Ozs7OytDQVBlSTs7Ozs7Ozs7Ozs7OENBYS9CLDhEQUFDbkI7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDQzs0Q0FBRUQsV0FBVTtzREFBbUU7Ozs7Ozs7Ozs7Ozs7Ozs7OENBTXBGLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUNvQjs0Q0FDQ2QsTUFBSzs0Q0FDTE4sV0FBVTtzREFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVNDLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWCw0RUFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNILHNFQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUszQiw4REFBQ0U7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNMLCtEQUFVQTtvQkFBQzBCLE9BQU07Ozs7Ozs7Ozs7OzBCQUV0Qiw4REFBQ3RCO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDSixnRUFBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUI7S0ExRU1FO0FBNEVOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbWFuYWdlcnMvYWRkdGVhbXMvcGFnZS50c3g/YWMwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBCdXR0b25MZWZ0IGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvYnRubGVmdCdcbmltcG9ydCBCdXR0b25SaWdodCBmcm9tICdAL2FwcC9jb21wb25lbnRzL2J0bnJpZ2h0J1xuaW1wb3J0IFRvdXJuYW1lbnROYW1lIGZyb20gJ0AvYXBwL2NvbXBvbmVudHMvdG91cm5hbWVudG5hbWUnO1xuXG5jb25zdCBBZGRUZWFtczogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgb3JhbmdlLXllbGxvdy1ncmFkaWVudCB3LVs1MiVdIGgtWzYwJV0gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC14bCBwYi0zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB0LTE0IHBiLTYnPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCc+QWRkIGEgVGVhbTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtOCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgb3ZlcmZsb3cteS1hdXRvIHB0LTQgcGItNCc+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1mdWxsIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgb3ZlcmZsb3cteS1hdXRvIG1heC1oLVs4MCVdIHctZnVsbCBweC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTNcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVGVhbSBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGVhbU5hbWV9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBweS0yIHB4LTMgdy1mdWxsIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRlYW1OYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtwbGF5ZXJzLm1hcCgocGxheWVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTNcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtgRW50ZXIgUGxheWVyLSR7aW5kZXggKyAxfSBOYW1lYH1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwbGF5ZXJ9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIHB5LTIgcHgtMyB3LWZ1bGwgZm9udC1ib2xkIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVQbGF5ZXJDaGFuZ2UoaW5kZXgsIGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC03XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYmctbGlnaHRZZWxsb3cgdGV4dC0yeGwgZm9udC1ib2xkIHAtMiBweC00IHJvdW5kZWQteGwgc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgIEZpbGwgRm9ybVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS03XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1saWdodFllbGxvdyB0ZXh0LTJ4bCBmb250LWJvbGQgcC0yIHB4LTQgcm91bmRlZC14bCBzaGFkb3ctMnhsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC05XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctbGlnaHRZZWxsb3cgcC0zIHB4LTUgcm91bmRlZC14bCBzaGFkb3cteGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb3VybmFtZW50TmFtZS8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTEwIGxlZnQtMTAnPlxuICAgICAgICAgICAgICAgIDxCdXR0b25MZWZ0IHJvdXRlPScvbWFuYWdlcnMvbWVudScvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTEwIHJpZ2h0LTEwJz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uUmlnaHQvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+IFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkVGVhbXM7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uTGVmdCIsIkJ1dHRvblJpZ2h0IiwiVG91cm5hbWVudE5hbWUiLCJBZGRUZWFtcyIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwidGVhbU5hbWUiLCJvbkNoYW5nZSIsImUiLCJzZXRUZWFtTmFtZSIsInRhcmdldCIsInJlcXVpcmVkIiwicGxheWVycyIsIm1hcCIsInBsYXllciIsImluZGV4IiwiaGFuZGxlUGxheWVyQ2hhbmdlIiwiYnV0dG9uIiwicm91dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/managers/addteams/page.tsx\n"));

/***/ })

});