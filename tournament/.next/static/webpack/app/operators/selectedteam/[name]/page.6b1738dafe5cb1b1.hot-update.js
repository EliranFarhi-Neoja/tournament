"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/operators/selectedteam/[name]/page",{

/***/ "(app-pages-browser)/./src/app/components/playerscore.tsx":
/*!********************************************!*\
  !*** ./src/app/components/playerscore.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst PlayerScore = (param)=>{\n    let { playerId, playerIndex, playerName, scores, onPlayerNameUpdate, onScoresUpdate } = param;\n    _s();\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [newName, setNewName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(playerName);\n    const [editableScores, setEditableScores] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        score1: scores.score1,\n        score2: scores.score2,\n        score3: scores.score3,\n        score4: scores.score4\n    });\n    const handleSave = ()=>{\n        onPlayerNameUpdate(playerId, newName);\n        onScoresUpdate(playerId, editableScores);\n        setIsEditing(false);\n    };\n    const playerColors = [\n        \"bg-green-500\",\n        \"bg-blue-500\",\n        \"bg-red-500\",\n        \"bg-yellow-500\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center justify-between gap-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(playerColors[playerIndex % playerColors.length], \" border-gray-500 py-1 flex justify-between items-center px-5 w-72 rounded-2xl shadow-xl\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"text-white bg-transparent font-bold text-xl py-2 max-w-40 focus:outline-none\",\n                            type: \"text\",\n                            value: newName,\n                            onChange: (e)=>setNewName(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 17\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-white font-bold text-xl py-2\",\n                            children: playerName\n                        }, void 0, false, {\n                            fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: isEditing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSave,\n                            className: \"text-white text-xl font-bold\",\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                            className: \"fa-solid fa-pen-to-square text-white text-xl cursor-pointer\",\n                            onClick: ()=>setIsEditing(true)\n                        }, void 0, false, {\n                            fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n                lineNumber: 40,\n                columnNumber: 5\n            }, undefined),\n            [\n                \"score1\",\n                \"score2\",\n                \"score3\",\n                \"score4\",\n                \"personalBest\"\n            ].map((scoreKey, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat(playerColors[playerIndex % playerColors.length], \" border-gray-500 py-1 flex justify-center items-center px-7 w-20 rounded-2xl shadow-xl\"),\n                    children: isEditing && scoreKey !== \"personalBest\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"text-white bg-transparent text-xl font-bold py-2 w-12 text-center focus:outline-none\",\n                        type: \"number\",\n                        value: editableScores[scoreKey],\n                        onChange: (e)=>setEditableScores({\n                                ...editableScores,\n                                [scoreKey]: Number(e.target.value)\n                            })\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white text-xl font-bold py-2\",\n                        children: scores[scoreKey]\n                    }, void 0, false, {\n                        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined)\n                }, index, false, {\n                    fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, undefined)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(playerColors[playerIndex % playerColors.length], \" border-gray-500 py-1 flex justify-center items-center px-8 w-20 rounded-2xl shadow-xl\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-white text-xl font-bold py-2\",\n                    children: scores.totalScore\n                }, void 0, false, {\n                    fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n                lineNumber: 84,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/Coding/freelance projects/tournament app/tournament/src/app/components/playerscore.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PlayerScore, \"PJfhq6ei6EvHgmKxiXzCMM+0fSs=\");\n_c = PlayerScore;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerScore);\nvar _c;\n$RefreshReg$(_c, \"PlayerScore\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXJzY29yZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBa0J4QyxNQUFNRSxjQUEwQztRQUFDLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxVQUFVLEVBQUVDLE1BQU0sRUFBRUMsa0JBQWtCLEVBQUVDLGNBQWMsRUFBRTs7SUFDOUgsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdULCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQ0k7SUFDdkMsTUFBTSxDQUFDUSxnQkFBZ0JDLGtCQUFrQixHQUFHYiwrQ0FBUUEsQ0FBQztRQUNqRGMsUUFBUVQsT0FBT1MsTUFBTTtRQUNyQkMsUUFBUVYsT0FBT1UsTUFBTTtRQUNyQkMsUUFBUVgsT0FBT1csTUFBTTtRQUNyQkMsUUFBUVosT0FBT1ksTUFBTTtJQUN6QjtJQUVBLE1BQU1DLGFBQWE7UUFDZlosbUJBQW1CSixVQUFVUTtRQUM3QkgsZUFBZUwsVUFBVVU7UUFDekJILGFBQWE7SUFDakI7SUFFQSxNQUFNVSxlQUFlO1FBQUM7UUFBZ0I7UUFBZTtRQUFjO0tBQWdCO0lBRW5GLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFbkIsOERBQUNEO2dCQUFJQyxXQUFXLEdBQW1ELE9BQWhERixZQUFZLENBQUNoQixjQUFjZ0IsYUFBYUcsTUFBTSxDQUFDLEVBQUM7O2tDQUMvRCw4REFBQ0Y7a0NBQ0laLDBCQUNHLDhEQUFDZTs0QkFDR0YsV0FBVTs0QkFDVkcsTUFBSzs0QkFDTEMsT0FBT2Y7NEJBQ1BnQixVQUFVLENBQUNDLElBQU1oQixXQUFXZ0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7OztzREFHOUMsOERBQUNJOzRCQUFFUixXQUFVO3NDQUFxQ2pCOzs7Ozs7Ozs7OztrQ0FHMUQsOERBQUNnQjtrQ0FDSVosMEJBQ0csOERBQUNzQjs0QkFBT0MsU0FBU2I7NEJBQVlHLFdBQVU7c0NBQStCOzs7OztzREFFdEUsOERBQUNXOzRCQUNHWCxXQUFVOzRCQUNWVSxTQUFTLElBQU10QixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztZQU0zQztnQkFBQztnQkFBVTtnQkFBVTtnQkFBVTtnQkFBVTthQUFlLENBQUN3QixHQUFHLENBQUMsQ0FBQ0MsVUFBVUMsc0JBQ3JFLDhEQUFDZjtvQkFFR0MsV0FBVyxHQUFtRCxPQUFoREYsWUFBWSxDQUFDaEIsY0FBY2dCLGFBQWFHLE1BQU0sQ0FBQyxFQUFDOzhCQUU3RGQsYUFBYTBCLGFBQWEsK0JBQ3ZCLDhEQUFDWDt3QkFDR0YsV0FBVTt3QkFDVkcsTUFBSzt3QkFDTEMsT0FBT2IsY0FBYyxDQUFDc0IsU0FBd0M7d0JBQzlEUixVQUFVLENBQUNDLElBQU1kLGtCQUFrQjtnQ0FBRSxHQUFHRCxjQUFjO2dDQUFFLENBQUNzQixTQUFTLEVBQUVFLE9BQU9ULEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFBRTs7Ozs7a0RBRy9GLDhEQUFDSTt3QkFBRVIsV0FBVTtrQ0FBcUNoQixNQUFNLENBQUM2QixTQUFnQzs7Ozs7O21CQVh4RkM7Ozs7OzBCQWlCYiw4REFBQ2Y7Z0JBQUlDLFdBQVcsR0FBbUQsT0FBaERGLFlBQVksQ0FBQ2hCLGNBQWNnQixhQUFhRyxNQUFNLENBQUMsRUFBQzswQkFDL0QsNEVBQUNPO29CQUFFUixXQUFVOzhCQUFxQ2hCLE9BQU9nQyxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzRTtHQXRFTXBDO0tBQUFBO0FBd0VOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXJzY29yZS50c3g/YjhlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQbGF5ZXJTY29yZVByb3BzIHtcbiAgICBwbGF5ZXJJZDogc3RyaW5nO1xuICAgIHBsYXllck5hbWU6IHN0cmluZztcbiAgICBwbGF5ZXJJbmRleDogbnVtYmVyO1xuICAgIHNjb3Jlczoge1xuICAgICAgICBzY29yZTE6IG51bWJlcjtcbiAgICAgICAgc2NvcmUyOiBudW1iZXI7XG4gICAgICAgIHNjb3JlMzogbnVtYmVyO1xuICAgICAgICBzY29yZTQ6IG51bWJlcjtcbiAgICAgICAgdG90YWxTY29yZTogbnVtYmVyO1xuICAgICAgICBwZXJzb25hbEJlc3Q6IG51bWJlcjsgLy8gQWRkZWQgcGVyc29uYWxCZXN0IHNjb3JlXG4gICAgfTtcbiAgICBvblBsYXllck5hbWVVcGRhdGU6IChwbGF5ZXJJZDogc3RyaW5nLCBuZXdOYW1lOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25TY29yZXNVcGRhdGU6IChwbGF5ZXJJZDogc3RyaW5nLCB1cGRhdGVkU2NvcmVzOiBhbnkpID0+IHZvaWQ7XG59XG5cbmNvbnN0IFBsYXllclNjb3JlOiBSZWFjdC5GQzxQbGF5ZXJTY29yZVByb3BzPiA9ICh7IHBsYXllcklkLCBwbGF5ZXJJbmRleCwgcGxheWVyTmFtZSwgc2NvcmVzLCBvblBsYXllck5hbWVVcGRhdGUsIG9uU2NvcmVzVXBkYXRlIH0pID0+IHtcbiAgICBjb25zdCBbaXNFZGl0aW5nLCBzZXRJc0VkaXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtuZXdOYW1lLCBzZXROZXdOYW1lXSA9IHVzZVN0YXRlKHBsYXllck5hbWUpO1xuICAgIGNvbnN0IFtlZGl0YWJsZVNjb3Jlcywgc2V0RWRpdGFibGVTY29yZXNdID0gdXNlU3RhdGUoe1xuICAgICAgICBzY29yZTE6IHNjb3Jlcy5zY29yZTEsXG4gICAgICAgIHNjb3JlMjogc2NvcmVzLnNjb3JlMixcbiAgICAgICAgc2NvcmUzOiBzY29yZXMuc2NvcmUzLFxuICAgICAgICBzY29yZTQ6IHNjb3Jlcy5zY29yZTQsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoYW5kbGVTYXZlID0gKCkgPT4ge1xuICAgICAgICBvblBsYXllck5hbWVVcGRhdGUocGxheWVySWQsIG5ld05hbWUpO1xuICAgICAgICBvblNjb3Jlc1VwZGF0ZShwbGF5ZXJJZCwgZWRpdGFibGVTY29yZXMpO1xuICAgICAgICBzZXRJc0VkaXRpbmcoZmFsc2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGF5ZXJDb2xvcnMgPSBbJ2JnLWdyZWVuLTUwMCcsICdiZy1ibHVlLTUwMCcsICdiZy1yZWQtNTAwJywgJ2JnLXllbGxvdy01MDAnXVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTVcIj5cbiAgICB7LyogUGxheWVyIE5hbWUgQm94ICovfVxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwbGF5ZXJDb2xvcnNbcGxheWVySW5kZXggJSBwbGF5ZXJDb2xvcnMubGVuZ3RoXX0gYm9yZGVyLWdyYXktNTAwIHB5LTEgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB4LTUgdy03MiByb3VuZGVkLTJ4bCBzaGFkb3cteGxgfT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtpc0VkaXRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgYmctdHJhbnNwYXJlbnQgZm9udC1ib2xkIHRleHQteGwgcHktMiBtYXgtdy00MCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdOYW1lfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld05hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkIHRleHQteGwgcHktMlwiPntwbGF5ZXJOYW1lfTwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2lzRWRpdGluZyA/IChcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmV9IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC14bCBmb250LWJvbGRcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXBlbi10by1zcXVhcmUgdGV4dC13aGl0ZSB0ZXh0LXhsIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNFZGl0aW5nKHRydWUpfVxuICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIHtbJ3Njb3JlMScsICdzY29yZTInLCAnc2NvcmUzJywgJ3Njb3JlNCcsICdwZXJzb25hbEJlc3QnXS5tYXAoKHNjb3JlS2V5LCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtwbGF5ZXJDb2xvcnNbcGxheWVySW5kZXggJSBwbGF5ZXJDb2xvcnMubGVuZ3RoXX0gYm9yZGVyLWdyYXktNTAwIHB5LTEgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHgtNyB3LTIwIHJvdW5kZWQtMnhsIHNoYWRvdy14bGB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtpc0VkaXRpbmcgJiYgc2NvcmVLZXkgIT09ICdwZXJzb25hbEJlc3QnID8gKFxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGJnLXRyYW5zcGFyZW50IHRleHQteGwgZm9udC1ib2xkIHB5LTIgdy0xMiB0ZXh0LWNlbnRlciBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VkaXRhYmxlU2NvcmVzW3Njb3JlS2V5IGFzIGtleW9mIHR5cGVvZiBlZGl0YWJsZVNjb3Jlc119XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RWRpdGFibGVTY29yZXMoeyAuLi5lZGl0YWJsZVNjb3JlcywgW3Njb3JlS2V5XTogTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1ib2xkIHB5LTJcIj57c2NvcmVzW3Njb3JlS2V5IGFzIGtleW9mIHR5cGVvZiBzY29yZXNdfTwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICkpfVxuXG4gICAgey8qIFRvdGFsIFNjb3JlIEJveCAqL31cbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cGxheWVyQ29sb3JzW3BsYXllckluZGV4ICUgcGxheWVyQ29sb3JzLmxlbmd0aF19IGJvcmRlci1ncmF5LTUwMCBweS0xIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB4LTggdy0yMCByb3VuZGVkLTJ4bCBzaGFkb3cteGxgfT5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LXhsIGZvbnQtYm9sZCBweS0yXCI+e3Njb3Jlcy50b3RhbFNjb3JlfTwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJTY29yZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlBsYXllclNjb3JlIiwicGxheWVySWQiLCJwbGF5ZXJJbmRleCIsInBsYXllck5hbWUiLCJzY29yZXMiLCJvblBsYXllck5hbWVVcGRhdGUiLCJvblNjb3Jlc1VwZGF0ZSIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsIm5ld05hbWUiLCJzZXROZXdOYW1lIiwiZWRpdGFibGVTY29yZXMiLCJzZXRFZGl0YWJsZVNjb3JlcyIsInNjb3JlMSIsInNjb3JlMiIsInNjb3JlMyIsInNjb3JlNCIsImhhbmRsZVNhdmUiLCJwbGF5ZXJDb2xvcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwiaSIsIm1hcCIsInNjb3JlS2V5IiwiaW5kZXgiLCJOdW1iZXIiLCJ0b3RhbFNjb3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/playerscore.tsx\n"));

/***/ })

});