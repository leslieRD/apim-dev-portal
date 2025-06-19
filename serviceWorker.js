/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/telemetry/serviceWorker.ts":
/*!****************************************!*\
  !*** ./src/telemetry/serviceWorker.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst allowedList = [\"state\", \"session_state\"];\r\nfunction sendMessageToClients(message) {\r\n    clients.matchAll().then((items) => {\r\n        if (items.length > 0) {\r\n            items.forEach(client => client.postMessage(message));\r\n        }\r\n    });\r\n}\r\naddEventListener(\"fetch\", (event) => {\r\n    const request = event.request;\r\n    event.respondWith((() => __awaiter(void 0, void 0, void 0, function* () {\r\n        const response = yield fetch(request);\r\n        if (request.url.endsWith(\"/trace\")) {\r\n            return response;\r\n        }\r\n        const cleanedUrl = request.url.indexOf(\"#code=\") > -1 ? cleanUpUrlParams(request) : request.url;\r\n        const telemetryData = {\r\n            url: cleanedUrl,\r\n            method: request.method.toUpperCase(),\r\n            status: response.status.toString(),\r\n            responseHeaders: \"\"\r\n        };\r\n        const headers = {};\r\n        response.headers.forEach((value, key) => {\r\n            if (key.toLocaleLowerCase() === \"authorization\") {\r\n                return;\r\n            }\r\n            headers[key] = value;\r\n        });\r\n        telemetryData.responseHeaders = JSON.stringify(headers);\r\n        sendMessageToClients(telemetryData);\r\n        return response;\r\n    }))());\r\n});\r\nconsole.log(\"Telemetry worker started.\");\r\nfunction cleanUpUrlParams(request) {\r\n    const url = new URL(request.url);\r\n    const hash = url.hash.substring(1);\r\n    const params = new URLSearchParams(hash);\r\n    for (const key of params.keys()) {\r\n        if (!allowedList.includes(key)) {\r\n            params.set(key, \"xxxxxxxxxx\");\r\n        }\r\n    }\r\n    url.hash = params.toString();\r\n    return url.toString();\r\n}\r\n\n\n//# sourceURL=webpack://apim-developer-portal/./src/telemetry/serviceWorker.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/telemetry/serviceWorker.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;