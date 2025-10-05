"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/math-problem/route";
exports.ids = ["app/api/math-problem/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmath-problem%2Froute&page=%2Fapi%2Fmath-problem%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmath-problem%2Froute.ts&appDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmath-problem%2Froute&page=%2Fapi%2Fmath-problem%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmath-problem%2Froute.ts&appDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_charl_Www_ottodot_coding_task_full_stack_app_api_math_problem_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/math-problem/route.ts */ \"(rsc)/./app/api/math-problem/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/math-problem/route\",\n        pathname: \"/api/math-problem\",\n        filename: \"route\",\n        bundlePath: \"app/api/math-problem/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\charl\\\\Www\\\\ottodot-coding-task-full-stack\\\\app\\\\api\\\\math-problem\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_charl_Www_ottodot_coding_task_full_stack_app_api_math_problem_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/math-problem/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtYXRoLXByb2JsZW0lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm1hdGgtcHJvYmxlbSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm1hdGgtcHJvYmxlbSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNjaGFybCU1Q1d3dyU1Q290dG9kb3QtY29kaW5nLXRhc2stZnVsbC1zdGFjayU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDY2hhcmwlNUNXd3clNUNvdHRvZG90LWNvZGluZy10YXNrLWZ1bGwtc3RhY2smaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDdUM7QUFDcEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoLXByb2JsZW0tZ2VuZXJhdG9yLz81OGRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXFd3d1xcXFxvdHRvZG90LWNvZGluZy10YXNrLWZ1bGwtc3RhY2tcXFxcYXBwXFxcXGFwaVxcXFxtYXRoLXByb2JsZW1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL21hdGgtcHJvYmxlbS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL21hdGgtcHJvYmxlbVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbWF0aC1wcm9ibGVtL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcV3d3XFxcXG90dG9kb3QtY29kaW5nLXRhc2stZnVsbC1zdGFja1xcXFxhcHBcXFxcYXBpXFxcXG1hdGgtcHJvYmxlbVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9tYXRoLXByb2JsZW0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmath-problem%2Froute&page=%2Fapi%2Fmath-problem%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmath-problem%2Froute.ts&appDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/math-problem/route.ts":
/*!***************************************!*\
  !*** ./app/api/math-problem/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/generative-ai */ \"(rsc)/./node_modules/@google/generative-ai/dist/index.mjs\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n// app/api/math-problem/route.ts\n\n\n\nconst genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI(process.env.GEMINI_API_KEY);\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(\"https://isolicdfkecvoyrjicah.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzb2xpY2Rma2Vjdm95cmppY2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NzAxNzYsImV4cCI6MjA3NTE0NjE3Nn0.lma8gF8O8IxvfvMEYDrmNxq1hXfO3yvOxgl2lBCqDu4\");\nasync function POST() {\n    const model = genAI.getGenerativeModel({\n        model: \"gemini-2.5-pro\"\n    });\n    const prompt = `\r\n    Generate a Primary 5 level math word problem.\r\n    Return JSON like:\r\n    {\r\n      \"problem_text\": \"A bakery sold 45 cupcakes...\",\r\n      \"final_answer\": 15\r\n    }\r\n  `;\n    const result = await model.generateContent(prompt);\n    const raw = result.response.text();\n    // Extract JSON block safely\n    const match = raw.match(/\\{[\\s\\S]*\\}/);\n    if (!match) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            error: \"Invalid AI response\"\n        }, {\n            status: 500\n        });\n    }\n    let parsed;\n    try {\n        parsed = JSON.parse(match[0]);\n    } catch (err) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            error: \"Failed to parse AI response\"\n        }, {\n            status: 500\n        });\n    }\n    const { data, error } = await supabase.from(\"math_problem_sessions\").insert([\n        {\n            problem_text: parsed.problem_text,\n            final_answer: parsed.final_answer\n        }\n    ]).select().single();\n    if (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n        problem: {\n            problem_text: parsed.problem_text,\n            final_answer: parsed.final_answer\n        },\n        sessionId: data.id\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21hdGgtcHJvYmxlbS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsZ0NBQWdDO0FBQzJCO0FBQ047QUFDVjtBQUUzQyxNQUFNRyxRQUFRLElBQUlILHFFQUFrQkEsQ0FBQ0ksUUFBUUMsR0FBRyxDQUFDQyxjQUFjO0FBQy9ELE1BQU1DLFdBQVdOLG1FQUFZQSxDQUMzQkcsMENBQW9DLEVBQ3BDQSxrTkFBeUM7QUFHcEMsZUFBZU07SUFDcEIsTUFBTUMsUUFBUVIsTUFBTVMsa0JBQWtCLENBQUM7UUFBRUQsT0FBTztJQUFpQjtJQUVqRSxNQUFNRSxTQUFTLENBQUM7Ozs7Ozs7RUFPaEIsQ0FBQztJQUVELE1BQU1DLFNBQVMsTUFBTUgsTUFBTUksZUFBZSxDQUFDRjtJQUMzQyxNQUFNRyxNQUFNRixPQUFPRyxRQUFRLENBQUNDLElBQUk7SUFFaEMsNEJBQTRCO0lBQzVCLE1BQU1DLFFBQVFILElBQUlHLEtBQUssQ0FBQztJQUN4QixJQUFJLENBQUNBLE9BQU87UUFDVixPQUFPakIsa0ZBQVlBLENBQUNrQixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFzQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMzRTtJQUVBLElBQUlDO0lBQ0osSUFBSTtRQUNGQSxTQUFTQyxLQUFLQyxLQUFLLENBQUNOLEtBQUssQ0FBQyxFQUFFO0lBQzlCLEVBQUUsT0FBT08sS0FBSztRQUNaLE9BQU94QixrRkFBWUEsQ0FBQ2tCLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQThCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ25GO0lBRUEsTUFBTSxFQUFFSyxJQUFJLEVBQUVOLEtBQUssRUFBRSxHQUFHLE1BQU1kLFNBQzNCcUIsSUFBSSxDQUFDLHlCQUNMQyxNQUFNLENBQUM7UUFBQztZQUFFQyxjQUFjUCxPQUFPTyxZQUFZO1lBQUVDLGNBQWNSLE9BQU9RLFlBQVk7UUFBQztLQUFFLEVBQ2pGQyxNQUFNLEdBQ05DLE1BQU07SUFFVCxJQUFJWixPQUFPO1FBQ1QsT0FBT25CLGtGQUFZQSxDQUFDa0IsSUFBSSxDQUFDO1lBQUVDLE9BQU9BLE1BQU1hLE9BQU87UUFBQyxHQUFHO1lBQUVaLFFBQVE7UUFBSTtJQUNuRTtJQUVBLE9BQU9wQixrRkFBWUEsQ0FBQ2tCLElBQUksQ0FBQztRQUN2QmUsU0FBUztZQUNQTCxjQUFjUCxPQUFPTyxZQUFZO1lBQ2pDQyxjQUFjUixPQUFPUSxZQUFZO1FBQ25DO1FBQ0FLLFdBQVdULEtBQUtVLEVBQUU7SUFDcEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGgtcHJvYmxlbS1nZW5lcmF0b3IvLi9hcHAvYXBpL21hdGgtcHJvYmxlbS9yb3V0ZS50cz9iZmQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvbWF0aC1wcm9ibGVtL3JvdXRlLnRzXHJcbmltcG9ydCB7IEdvb2dsZUdlbmVyYXRpdmVBSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmVyYXRpdmUtYWlcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmNvbnN0IGdlbkFJID0gbmV3IEdvb2dsZUdlbmVyYXRpdmVBSShwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWSEpO1xyXG5jb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChcclxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwhLFxyXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIVxyXG4pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QoKSB7XHJcbiAgY29uc3QgbW9kZWwgPSBnZW5BSS5nZXRHZW5lcmF0aXZlTW9kZWwoeyBtb2RlbDogXCJnZW1pbmktMi41LXByb1wiIH0pO1xyXG5cclxuICBjb25zdCBwcm9tcHQgPSBgXHJcbiAgICBHZW5lcmF0ZSBhIFByaW1hcnkgNSBsZXZlbCBtYXRoIHdvcmQgcHJvYmxlbS5cclxuICAgIFJldHVybiBKU09OIGxpa2U6XHJcbiAgICB7XHJcbiAgICAgIFwicHJvYmxlbV90ZXh0XCI6IFwiQSBiYWtlcnkgc29sZCA0NSBjdXBjYWtlcy4uLlwiLFxyXG4gICAgICBcImZpbmFsX2Fuc3dlclwiOiAxNVxyXG4gICAgfVxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1vZGVsLmdlbmVyYXRlQ29udGVudChwcm9tcHQpO1xyXG4gIGNvbnN0IHJhdyA9IHJlc3VsdC5yZXNwb25zZS50ZXh0KCk7XHJcblxyXG4gIC8vIEV4dHJhY3QgSlNPTiBibG9jayBzYWZlbHlcclxuICBjb25zdCBtYXRjaCA9IHJhdy5tYXRjaCgvXFx7W1xcc1xcU10qXFx9Lyk7XHJcbiAgaWYgKCFtYXRjaCkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW52YWxpZCBBSSByZXNwb25zZVwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG5cclxuICBsZXQgcGFyc2VkO1xyXG4gIHRyeSB7XHJcbiAgICBwYXJzZWQgPSBKU09OLnBhcnNlKG1hdGNoWzBdKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkZhaWxlZCB0byBwYXJzZSBBSSByZXNwb25zZVwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJtYXRoX3Byb2JsZW1fc2Vzc2lvbnNcIilcclxuICAgIC5pbnNlcnQoW3sgcHJvYmxlbV90ZXh0OiBwYXJzZWQucHJvYmxlbV90ZXh0LCBmaW5hbF9hbnN3ZXI6IHBhcnNlZC5maW5hbF9hbnN3ZXIgfV0pXHJcbiAgICAuc2VsZWN0KClcclxuICAgIC5zaW5nbGUoKTtcclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB9LCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgIHByb2JsZW06IHtcclxuICAgICAgcHJvYmxlbV90ZXh0OiBwYXJzZWQucHJvYmxlbV90ZXh0LFxyXG4gICAgICBmaW5hbF9hbnN3ZXI6IHBhcnNlZC5maW5hbF9hbnN3ZXIsXHJcbiAgICB9LFxyXG4gICAgc2Vzc2lvbklkOiBkYXRhLmlkLFxyXG4gIH0pO1xyXG59Il0sIm5hbWVzIjpbIkdvb2dsZUdlbmVyYXRpdmVBSSIsImNyZWF0ZUNsaWVudCIsIk5leHRSZXNwb25zZSIsImdlbkFJIiwicHJvY2VzcyIsImVudiIsIkdFTUlOSV9BUElfS0VZIiwic3VwYWJhc2UiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsIlBPU1QiLCJtb2RlbCIsImdldEdlbmVyYXRpdmVNb2RlbCIsInByb21wdCIsInJlc3VsdCIsImdlbmVyYXRlQ29udGVudCIsInJhdyIsInJlc3BvbnNlIiwidGV4dCIsIm1hdGNoIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwiZXJyIiwiZGF0YSIsImZyb20iLCJpbnNlcnQiLCJwcm9ibGVtX3RleHQiLCJmaW5hbF9hbnN3ZXIiLCJzZWxlY3QiLCJzaW5nbGUiLCJtZXNzYWdlIiwicHJvYmxlbSIsInNlc3Npb25JZCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/math-problem/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/whatwg-url","vendor-chunks/tr46","vendor-chunks/@google","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmath-problem%2Froute&page=%2Fapi%2Fmath-problem%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmath-problem%2Froute.ts&appDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();