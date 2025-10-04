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
exports.id = "app/api/math-problem/submit/route";
exports.ids = ["app/api/math-problem/submit/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmath-problem%2Fsubmit%2Froute&page=%2Fapi%2Fmath-problem%2Fsubmit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmath-problem%2Fsubmit%2Froute.ts&appDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmath-problem%2Fsubmit%2Froute&page=%2Fapi%2Fmath-problem%2Fsubmit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmath-problem%2Fsubmit%2Froute.ts&appDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_charl_Www_ottodot_coding_task_full_stack_app_api_math_problem_submit_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/math-problem/submit/route.ts */ \"(rsc)/./app/api/math-problem/submit/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/math-problem/submit/route\",\n        pathname: \"/api/math-problem/submit\",\n        filename: \"route\",\n        bundlePath: \"app/api/math-problem/submit/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\charl\\\\Www\\\\ottodot-coding-task-full-stack\\\\app\\\\api\\\\math-problem\\\\submit\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_charl_Www_ottodot_coding_task_full_stack_app_api_math_problem_submit_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/math-problem/submit/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZtYXRoLXByb2JsZW0lMkZzdWJtaXQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRm1hdGgtcHJvYmxlbSUyRnN1Ym1pdCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRm1hdGgtcHJvYmxlbSUyRnN1Ym1pdCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNjaGFybCU1Q1d3dyU1Q290dG9kb3QtY29kaW5nLXRhc2stZnVsbC1zdGFjayU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDY2hhcmwlNUNXd3clNUNvdHRvZG90LWNvZGluZy10YXNrLWZ1bGwtc3RhY2smaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDK0M7QUFDNUg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoLXByb2JsZW0tZ2VuZXJhdG9yLz9lZDg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXFd3d1xcXFxvdHRvZG90LWNvZGluZy10YXNrLWZ1bGwtc3RhY2tcXFxcYXBwXFxcXGFwaVxcXFxtYXRoLXByb2JsZW1cXFxcc3VibWl0XFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9tYXRoLXByb2JsZW0vc3VibWl0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvbWF0aC1wcm9ibGVtL3N1Ym1pdFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbWF0aC1wcm9ibGVtL3N1Ym1pdC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXFd3d1xcXFxvdHRvZG90LWNvZGluZy10YXNrLWZ1bGwtc3RhY2tcXFxcYXBwXFxcXGFwaVxcXFxtYXRoLXByb2JsZW1cXFxcc3VibWl0XFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL21hdGgtcHJvYmxlbS9zdWJtaXQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmath-problem%2Fsubmit%2Froute&page=%2Fapi%2Fmath-problem%2Fsubmit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmath-problem%2Fsubmit%2Froute.ts&appDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/math-problem/submit/route.ts":
/*!**********************************************!*\
  !*** ./app/api/math-problem/submit/route.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/generative-ai */ \"(rsc)/./node_modules/@google/generative-ai/dist/index.mjs\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/./node_modules/@supabase/supabase-js/dist/module/index.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\n\nconst genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI(process.env.GEMINI_API_KEY);\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_2__.createClient)(\"https://isolicdfkecvoyrjicah.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlzb2xpY2Rma2Vjdm95cmppY2FoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NzAxNzYsImV4cCI6MjA3NTE0NjE3Nn0.lma8gF8O8IxvfvMEYDrmNxq1hXfO3yvOxgl2lBCqDu4\");\nasync function POST(req) {\n    const { sessionId, answer } = await req.json();\n    const { data: session, error: sessionError } = await supabase.from(\"math_problem_sessions\").select(\"*\").eq(\"id\", sessionId).single();\n    if (sessionError || !session) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            error: \"Session not found\"\n        }, {\n            status: 404\n        });\n    }\n    const correct = Number(answer) === Number(session.final_answer);\n    const feedbackPrompt = `\r\n    A student answered a math problem:\r\n    Problem: ${session.problem_text}\r\n    Correct Answer: ${session.final_answer}\r\n    Student Answer: ${answer}\r\n    Was it correct? ${correct ? \"Yes\" : \"No\"}\r\n\r\n    Give personalized feedback for a Primary 5 student.\r\n  `;\n    const model = genAI.getGenerativeModel({\n        model: \"gemini-2.5-flash\"\n    });\n    const result = await model.generateContent(feedbackPrompt);\n    const feedback = result.response.text();\n    await supabase.from(\"math_problem_submissions\").insert([\n        {\n            session_id: sessionId,\n            student_answer: answer,\n            is_correct: correct,\n            feedback\n        }\n    ]);\n    if (!sessionId || typeof answer !== \"number\") {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n            error: \"Invalid input\"\n        }, {\n            status: 400\n        });\n    }\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n        feedback,\n        correct\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL21hdGgtcHJvYmxlbS9zdWJtaXQvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyRDtBQUNOO0FBQ1Y7QUFFM0MsTUFBTUcsUUFBUSxJQUFJSCxxRUFBa0JBLENBQUNJLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUMvRCxNQUFNQyxXQUFXTixtRUFBWUEsQ0FDM0JHLDBDQUFvQyxFQUNwQ0Esa05BQXlDO0FBR3BDLGVBQWVNLEtBQUtDLEdBQVk7SUFDckMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7SUFFNUMsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUVDLE9BQU9DLFlBQVksRUFBRSxHQUFHLE1BQU1YLFNBQ2xEWSxJQUFJLENBQUMseUJBQ0xDLE1BQU0sQ0FBQyxLQUNQQyxFQUFFLENBQUMsTUFBTVQsV0FDVFUsTUFBTTtJQUVULElBQUlKLGdCQUFnQixDQUFDRixTQUFTO1FBQzVCLE9BQU9kLGtGQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRUcsT0FBTztRQUFvQixHQUFHO1lBQUVNLFFBQVE7UUFBSTtJQUN6RTtJQUVBLE1BQU1DLFVBQVVDLE9BQU9aLFlBQVlZLE9BQU9ULFFBQVFVLFlBQVk7SUFFOUQsTUFBTUMsaUJBQWlCLENBQUM7O2FBRWIsRUFBRVgsUUFBUVksWUFBWSxDQUFDO29CQUNoQixFQUFFWixRQUFRVSxZQUFZLENBQUM7b0JBQ3ZCLEVBQUViLE9BQU87b0JBQ1QsRUFBRVcsVUFBVSxRQUFRLEtBQUs7OztFQUczQyxDQUFDO0lBRUQsTUFBTUssUUFBUTFCLE1BQU0yQixrQkFBa0IsQ0FBQztRQUFFRCxPQUFPO0lBQW1CO0lBQ25FLE1BQU1FLFNBQVMsTUFBTUYsTUFBTUcsZUFBZSxDQUFDTDtJQUMzQyxNQUFNTSxXQUFXRixPQUFPRyxRQUFRLENBQUNDLElBQUk7SUFFckMsTUFBTTVCLFNBQVNZLElBQUksQ0FBQyw0QkFBNEJpQixNQUFNLENBQUM7UUFDckQ7WUFDRUMsWUFBWXpCO1lBQ1owQixnQkFBZ0J6QjtZQUNoQjBCLFlBQVlmO1lBQ1pTO1FBQ0Y7S0FDRDtJQUVELElBQUksQ0FBQ3JCLGFBQWEsT0FBT0MsV0FBVyxVQUFVO1FBQzVDLE9BQU9YLGtGQUFZQSxDQUFDWSxJQUFJLENBQUM7WUFBRUcsT0FBTztRQUFnQixHQUFHO1lBQUVNLFFBQVE7UUFBSTtJQUNyRTtJQUVBLE9BQU9yQixrRkFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1FBQUVtQjtRQUFVVDtJQUFRO0FBQy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0aC1wcm9ibGVtLWdlbmVyYXRvci8uL2FwcC9hcGkvbWF0aC1wcm9ibGVtL3N1Ym1pdC9yb3V0ZS50cz9kMTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvb2dsZUdlbmVyYXRpdmVBSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmVyYXRpdmUtYWlcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IH0gZnJvbSBcIkBzdXBhYmFzZS9zdXBhYmFzZS1qc1wiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcbmNvbnN0IGdlbkFJID0gbmV3IEdvb2dsZUdlbmVyYXRpdmVBSShwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWSEpO1xyXG5jb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChcclxuICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwhLFxyXG4gIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIVxyXG4pO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxOiBSZXF1ZXN0KSB7XHJcbiAgY29uc3QgeyBzZXNzaW9uSWQsIGFuc3dlciB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBlcnJvcjogc2Vzc2lvbkVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZVxyXG4gICAgLmZyb20oXCJtYXRoX3Byb2JsZW1fc2Vzc2lvbnNcIilcclxuICAgIC5zZWxlY3QoXCIqXCIpXHJcbiAgICAuZXEoXCJpZFwiLCBzZXNzaW9uSWQpXHJcbiAgICAuc2luZ2xlKCk7XHJcblxyXG4gIGlmIChzZXNzaW9uRXJyb3IgfHwgIXNlc3Npb24pIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlNlc3Npb24gbm90IGZvdW5kXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvcnJlY3QgPSBOdW1iZXIoYW5zd2VyKSA9PT0gTnVtYmVyKHNlc3Npb24uZmluYWxfYW5zd2VyKTtcclxuXHJcbiAgY29uc3QgZmVlZGJhY2tQcm9tcHQgPSBgXHJcbiAgICBBIHN0dWRlbnQgYW5zd2VyZWQgYSBtYXRoIHByb2JsZW06XHJcbiAgICBQcm9ibGVtOiAke3Nlc3Npb24ucHJvYmxlbV90ZXh0fVxyXG4gICAgQ29ycmVjdCBBbnN3ZXI6ICR7c2Vzc2lvbi5maW5hbF9hbnN3ZXJ9XHJcbiAgICBTdHVkZW50IEFuc3dlcjogJHthbnN3ZXJ9XHJcbiAgICBXYXMgaXQgY29ycmVjdD8gJHtjb3JyZWN0ID8gXCJZZXNcIiA6IFwiTm9cIn1cclxuXHJcbiAgICBHaXZlIHBlcnNvbmFsaXplZCBmZWVkYmFjayBmb3IgYSBQcmltYXJ5IDUgc3R1ZGVudC5cclxuICBgO1xyXG5cclxuICBjb25zdCBtb2RlbCA9IGdlbkFJLmdldEdlbmVyYXRpdmVNb2RlbCh7IG1vZGVsOiBcImdlbWluaS0yLjUtZmxhc2hcIiB9KTtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtb2RlbC5nZW5lcmF0ZUNvbnRlbnQoZmVlZGJhY2tQcm9tcHQpO1xyXG4gIGNvbnN0IGZlZWRiYWNrID0gcmVzdWx0LnJlc3BvbnNlLnRleHQoKTtcclxuXHJcbiAgYXdhaXQgc3VwYWJhc2UuZnJvbShcIm1hdGhfcHJvYmxlbV9zdWJtaXNzaW9uc1wiKS5pbnNlcnQoW1xyXG4gICAge1xyXG4gICAgICBzZXNzaW9uX2lkOiBzZXNzaW9uSWQsXHJcbiAgICAgIHN0dWRlbnRfYW5zd2VyOiBhbnN3ZXIsXHJcbiAgICAgIGlzX2NvcnJlY3Q6IGNvcnJlY3QsXHJcbiAgICAgIGZlZWRiYWNrXHJcbiAgICB9LFxyXG4gIF0pO1xyXG5cclxuICBpZiAoIXNlc3Npb25JZCB8fCB0eXBlb2YgYW5zd2VyICE9PSBcIm51bWJlclwiKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnZhbGlkIGlucHV0XCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGZlZWRiYWNrLCBjb3JyZWN0IH0pO1xyXG59Il0sIm5hbWVzIjpbIkdvb2dsZUdlbmVyYXRpdmVBSSIsImNyZWF0ZUNsaWVudCIsIk5leHRSZXNwb25zZSIsImdlbkFJIiwicHJvY2VzcyIsImVudiIsIkdFTUlOSV9BUElfS0VZIiwic3VwYWJhc2UiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwiLCJORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSIsIlBPU1QiLCJyZXEiLCJzZXNzaW9uSWQiLCJhbnN3ZXIiLCJqc29uIiwiZGF0YSIsInNlc3Npb24iLCJlcnJvciIsInNlc3Npb25FcnJvciIsImZyb20iLCJzZWxlY3QiLCJlcSIsInNpbmdsZSIsInN0YXR1cyIsImNvcnJlY3QiLCJOdW1iZXIiLCJmaW5hbF9hbnN3ZXIiLCJmZWVkYmFja1Byb21wdCIsInByb2JsZW1fdGV4dCIsIm1vZGVsIiwiZ2V0R2VuZXJhdGl2ZU1vZGVsIiwicmVzdWx0IiwiZ2VuZXJhdGVDb250ZW50IiwiZmVlZGJhY2siLCJyZXNwb25zZSIsInRleHQiLCJpbnNlcnQiLCJzZXNzaW9uX2lkIiwic3R1ZGVudF9hbnN3ZXIiLCJpc19jb3JyZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/math-problem/submit/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/@google","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fmath-problem%2Fsubmit%2Froute&page=%2Fapi%2Fmath-problem%2Fsubmit%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fmath-problem%2Fsubmit%2Froute.ts&appDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ccharl%5CWww%5Cottodot-coding-task-full-stack&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();