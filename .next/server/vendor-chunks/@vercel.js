"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(ssr)/../../../node_modules/@vercel/speed-insights/dist/next/index.mjs":
/*!************************************************************************!*\
  !*** ../../../node_modules/@vercel/speed-insights/dist/next/index.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SpeedInsights: () => (/* binding */ SpeedInsights2)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var next_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation.js */ \"(ssr)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ SpeedInsights auto */ // src/nextjs/index.tsx\n\n// src/react/index.tsx\n\n// package.json\nvar name = \"@vercel/speed-insights\";\nvar version = \"1.0.13\";\n// src/queue.ts\nvar initQueue = ()=>{\n    if (window.si) return;\n    window.si = function a(...params) {\n        (window.siq = window.siq || []).push(params);\n    };\n};\n// src/utils.ts\nfunction isBrowser() {\n    return \"undefined\" !== \"undefined\";\n}\nfunction detectEnvironment() {\n    try {\n        const env = \"development\";\n        if (env === \"development\" || env === \"test\") {\n            return \"development\";\n        }\n    } catch (e) {}\n    return \"production\";\n}\nfunction isDevelopment() {\n    return detectEnvironment() === \"development\";\n}\nfunction computeRoute(pathname, pathParams) {\n    if (!pathname || !pathParams) {\n        return pathname;\n    }\n    let result = pathname;\n    try {\n        const entries = Object.entries(pathParams);\n        for (const [key, value] of entries){\n            if (!Array.isArray(value)) {\n                const matcher = turnValueToRegExp(value);\n                if (matcher.test(result)) {\n                    result = result.replace(matcher, `/[${key}]`);\n                }\n            }\n        }\n        for (const [key, value] of entries){\n            if (Array.isArray(value)) {\n                const matcher = turnValueToRegExp(value.join(\"/\"));\n                if (matcher.test(result)) {\n                    result = result.replace(matcher, `/[...${key}]`);\n                }\n            }\n        }\n        return result;\n    } catch (e) {\n        return pathname;\n    }\n}\nfunction turnValueToRegExp(value) {\n    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);\n}\nfunction escapeRegExp(string) {\n    return string.replace(/[.*+?^${}()|[\\]\\\\]/g, \"\\\\$&\");\n}\n// src/generic.ts\nvar SCRIPT_URL = `https://va.vercel-scripts.com/v1/speed-insights`;\nvar PROD_SCRIPT_URL = `${SCRIPT_URL}/script.js`;\nvar DEV_SCRIPT_URL = `${SCRIPT_URL}/script.debug.js`;\nvar PROXY_SCRIPT_URL = `/_vercel/speed-insights/script.js`;\nfunction injectSpeedInsights(props = {}) {\n    var _a;\n    if (!isBrowser() || props.route === null) return null;\n    initQueue();\n    const isSelfHosted = Boolean(props.dsn);\n    const productionScript = isSelfHosted ? PROD_SCRIPT_URL : PROXY_SCRIPT_URL;\n    const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : productionScript);\n    if (document.head.querySelector(`script[src*=\"${src}\"]`)) return null;\n    if (props.beforeSend) {\n        (_a = window.si) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n    }\n    const script = document.createElement(\"script\");\n    script.src = src;\n    script.defer = true;\n    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : \"\");\n    script.dataset.sdkv = version;\n    if (props.sampleRate) {\n        script.dataset.sampleRate = props.sampleRate.toString();\n    }\n    if (props.route) {\n        script.dataset.route = props.route;\n    }\n    if (props.endpoint) {\n        script.dataset.endpoint = props.endpoint;\n    }\n    if (props.dsn) {\n        script.dataset.dsn = props.dsn;\n    }\n    if (isDevelopment() && props.debug === false) {\n        script.dataset.debug = \"false\";\n    }\n    script.onerror = ()=>{\n        console.log(`[Vercel Speed Insights] Failed to load script from ${src}. Please check if any content blockers are enabled and try again.`);\n    };\n    document.head.appendChild(script);\n    return {\n        setRoute: (route)=>{\n            script.dataset.route = route ?? void 0;\n        }\n    };\n}\n// src/react/index.tsx\nfunction SpeedInsights(props) {\n    const setScriptRoute = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!setScriptRoute.current) {\n            const script = injectSpeedInsights({\n                framework: props.framework || \"react\",\n                ...props\n            });\n            if (script) {\n                setScriptRoute.current = script.setRoute;\n            }\n        } else if (props.route) {\n            setScriptRoute.current(props.route);\n        }\n    }, [\n        props.route\n    ]);\n    return null;\n}\n// src/nextjs/utils.ts\n\nvar useRoute = ()=>{\n    const params = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n    const searchParams = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)() || new URLSearchParams();\n    const path = (0,next_navigation_js__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const finalParams = {\n        ...Object.fromEntries(searchParams.entries()),\n        ...params || {}\n    };\n    return params ? computeRoute(path, finalParams) : null;\n};\n// src/nextjs/index.tsx\nfunction SpeedInsightsComponent(props) {\n    const route = useRoute();\n    return /* @__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpeedInsights, {\n        route,\n        ...props,\n        framework: \"next\"\n    });\n}\nfunction SpeedInsights2(props) {\n    return /* @__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n        fallback: null\n    }, /* @__PURE__ */ /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(SpeedInsightsComponent, {\n        ...props\n    }));\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0B2ZXJjZWwvc3BlZWQtaW5zaWdodHMvZGlzdC9uZXh0L2luZGV4Lm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDOztBQ0NFOztBQ0FoQyxXQUFRO0FBQ1IsY0FBVzs7QUNGTixJQUFNLFlBQVk7SUFFdkIsSUFBSSxPQUFPLElBQUk7SUFFZixPQUFPLEtBQUssU0FBUyxLQUFLLFFBQWM7U0FDckMsT0FBTyxNQUFNLE9BQU8sT0FBTyxFQUFDLEVBQUcsS0FBSyxNQUFNO0lBQzdDO0FBQ0Y7O0FDUE8sU0FBUyxZQUFxQjtJQUNuQyxPQUFPLE9BQU8sU0FBVztBQUMzQjtBQUVBLFNBQVMsb0JBQWtEO0lBQ3pELElBQUk7UUFDRixNQUFNLE1BQU0sUUFBUSxJQUFJO1FBQ3hCLElBQUksUUFBUSxpQkFBaUIsUUFBUSxRQUFRO1lBQzNDLE9BQU87UUFDVDtJQUNGLFNBQVMsR0FBRyxDQUVaO0lBQ0EsT0FBTztBQUNUO0FBTU8sU0FBUyxnQkFBeUI7SUFDdkMsT0FBTyxrQkFBa0IsTUFBTTtBQUNqQztBQUVPLFNBQVMsYUFDZCxVQUNBLFlBQ2U7SUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVk7UUFDNUIsT0FBTztJQUNUO0lBRUEsSUFBSSxTQUFTO0lBQ2IsSUFBSTtRQUNGLE1BQU0sVUFBVSxPQUFPLFFBQVEsVUFBVTtRQUV6QyxXQUFXLENBQUMsS0FBSyxLQUFLLEtBQUssUUFBUztZQUNsQyxJQUFJLENBQUMsTUFBTSxRQUFRLEtBQUssR0FBRztnQkFDekIsTUFBTSxVQUFVLGtCQUFrQixLQUFLO2dCQUN2QyxJQUFJLFFBQVEsS0FBSyxNQUFNLEdBQUc7b0JBQ3hCLFNBQVMsT0FBTyxRQUFRLFNBQVMsS0FBSyxHQUFHLEdBQUc7Z0JBQzlDO1lBQ0Y7UUFDRjtRQUVBLFdBQVcsQ0FBQyxLQUFLLEtBQUssS0FBSyxRQUFTO1lBQ2xDLElBQUksTUFBTSxRQUFRLEtBQUssR0FBRztnQkFDeEIsTUFBTSxVQUFVLGtC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RDs7QU5UQSxTQUFTLHVCQUF1QixPQUFrQztJQUNoRSxNQUFNLFFBQVEsU0FBUztJQUV2QixPQUFPLCtFQUFDO1FBQW9CO1FBQWUsR0FBRztRQUFPLFdBQVU7SUFBQSxDQUFPO0FBQ3hFO0FBRU8sU0FBU0EsZUFBYyxPQUFrQztJQUM5RCxPQUNFLCtFQUFDLDJDQUFRLEVBQVI7UUFBUyxVQUFVO0lBQUEsR0FDbEIsK0VBQUM7UUFBd0IsR0FBRztJQUFBLENBQU8sQ0FDckM7QUFFSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NoZWFwYm9vc3RzLy4uLy4uL3NyYy9uZXh0anMvaW5kZXgudHN4P2RiMzciLCJ3ZWJwYWNrOi8vY2hlYXBib29zdHMvLi4vLi4vc3JjL3JlYWN0L2luZGV4LnRzeD9lNGI3Iiwid2VicGFjazovL2NoZWFwYm9vc3RzLy4uLy4uL3BhY2thZ2UuanNvbj82ZmM2Iiwid2VicGFjazovL2NoZWFwYm9vc3RzLy4uLy4uL3NyYy9xdWV1ZS50cz84NzNlIiwid2VicGFjazovL2NoZWFwYm9vc3RzLy4uLy4uL3NyYy91dGlscy50cz82MjUyIiwid2VicGFjazovL2NoZWFwYm9vc3RzLy4uLy4uL3NyYy9nZW5lcmljLnRzPzBiZGYiLCJ3ZWJwYWNrOi8vY2hlYXBib29zdHMvLi4vLi4vc3JjL25leHRqcy91dGlscy50cz8xNzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBTdXNwZW5zZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNwZWVkSW5zaWdodHMgYXMgU3BlZWRJbnNpZ2h0c1NjcmlwdCB9IGZyb20gJy4uL3JlYWN0JztcbmltcG9ydCB0eXBlIHsgU3BlZWRJbnNpZ2h0c1Byb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgdXNlUm91dGUgfSBmcm9tICcuL3V0aWxzJztcblxudHlwZSBQcm9wcyA9IE9taXQ8U3BlZWRJbnNpZ2h0c1Byb3BzLCAncm91dGUnPjtcblxuZnVuY3Rpb24gU3BlZWRJbnNpZ2h0c0NvbXBvbmVudChwcm9wczogUHJvcHMpOiBSZWFjdC5SZWFjdEVsZW1lbnQge1xuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlKCk7XG5cbiAgcmV0dXJuIDxTcGVlZEluc2lnaHRzU2NyaXB0IHJvdXRlPXtyb3V0ZX0gey4uLnByb3BzfSBmcmFtZXdvcms9XCJuZXh0XCIgLz47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTcGVlZEluc2lnaHRzKHByb3BzOiBQcm9wcyk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPFN1c3BlbnNlIGZhbGxiYWNrPXtudWxsfT5cbiAgICAgIDxTcGVlZEluc2lnaHRzQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICA8L1N1c3BlbnNlPlxuICApO1xufVxuIiwiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHlwZSB7IFNwZWVkSW5zaWdodHNQcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGNvbXB1dGVSb3V0ZSwgaW5qZWN0U3BlZWRJbnNpZ2h0cyB9IGZyb20gJy4uL2dlbmVyaWMnO1xuXG5leHBvcnQgZnVuY3Rpb24gU3BlZWRJbnNpZ2h0cyhcbiAgcHJvcHM6IFNwZWVkSW5zaWdodHNQcm9wcyAmIHtcbiAgICBmcmFtZXdvcms/OiBzdHJpbmc7XG4gIH0sXG4pOiBKU1guRWxlbWVudCB8IG51bGwge1xuICBjb25zdCBzZXRTY3JpcHRSb3V0ZSA9IHVzZVJlZjwoKHBhdGg6IHN0cmluZykgPT4gdm9pZCkgfCBudWxsPihudWxsKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNldFNjcmlwdFJvdXRlLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGluamVjdFNwZWVkSW5zaWdodHMoe1xuICAgICAgICBmcmFtZXdvcms6IHByb3BzLmZyYW1ld29yayB8fCAncmVhY3QnLFxuICAgICAgICAuLi5wcm9wcyxcbiAgICAgIH0pO1xuICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICBzZXRTY3JpcHRSb3V0ZS5jdXJyZW50ID0gc2NyaXB0LnNldFJvdXRlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJvcHMucm91dGUpIHtcbiAgICAgIHNldFNjcmlwdFJvdXRlLmN1cnJlbnQocHJvcHMucm91dGUpO1xuICAgIH1cbiAgfSwgW3Byb3BzLnJvdXRlXSk7XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCB7IGNvbXB1dGVSb3V0ZSB9O1xuIiwie1xuICBcIm5hbWVcIjogXCJAdmVyY2VsL3NwZWVkLWluc2lnaHRzXCIsXG4gIFwidmVyc2lvblwiOiBcIjEuMC4xM1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU3BlZWQgSW5zaWdodHMgaXMgYSB0b29sIGZvciBtZWFzdXJpbmcgd2ViIHBlcmZvcm1hbmNlIGFuZCBwcm92aWRpbmcgc3VnZ2VzdGlvbnMgZm9yIGltcHJvdmVtZW50LlwiLFxuICBcImtleXdvcmRzXCI6IFtcbiAgICBcInNwZWVkLWluc2lnaHRzXCIsXG4gICAgXCJ2ZXJjZWxcIlxuICBdLFxuICBcInJlcG9zaXRvcnlcIjoge1xuICAgIFwidXJsXCI6IFwiZ2l0aHViOnZlcmNlbC9zcGVlZC1pbnNpZ2h0c1wiLFxuICAgIFwiZGlyZWN0b3J5XCI6IFwicGFja2FnZXMvd2ViXCJcbiAgfSxcbiAgXCJsaWNlbnNlXCI6IFwiQXBhY2hlLTIuMFwiLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLi9wYWNrYWdlLmpzb25cIjogXCIuL3BhY2thZ2UuanNvblwiLFxuICAgIFwiLlwiOiB7XG4gICAgICBcImJyb3dzZXJcIjogXCIuL2Rpc3QvaW5kZXgubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vYXN0cm9cIjoge1xuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvYXN0cm8vY29tcG9uZW50LnRzXCJcbiAgICB9LFxuICAgIFwiLi9uZXh0XCI6IHtcbiAgICAgIFwiYnJvd3NlclwiOiBcIi4vZGlzdC9uZXh0L2luZGV4Lm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvbmV4dC9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9uZXh0L2luZGV4LmpzXCJcbiAgICB9LFxuICAgIFwiLi9udXh0XCI6IHtcbiAgICAgIFwiYnJvd3NlclwiOiBcIi4vZGlzdC9udXh0L2luZGV4Lm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvbnV4dC9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9udXh0L2luZGV4LmpzXCJcbiAgICB9LFxuICAgIFwiLi9yZWFjdFwiOiB7XG4gICAgICBcImJyb3dzZXJcIjogXCIuL2Rpc3QvcmVhY3QvaW5kZXgubWpzXCIsXG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9yZWFjdC9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC9yZWFjdC9pbmRleC5qc1wiXG4gICAgfSxcbiAgICBcIi4vcmVtaXhcIjoge1xuICAgICAgXCJicm93c2VyXCI6IFwiLi9kaXN0L3JlbWl4L2luZGV4Lm1qc1wiLFxuICAgICAgXCJpbXBvcnRcIjogXCIuL2Rpc3QvcmVtaXgvaW5kZXgubWpzXCIsXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvcmVtaXgvaW5kZXguanNcIlxuICAgIH0sXG4gICAgXCIuL3N2ZWx0ZWtpdFwiOiB7XG4gICAgICBcInN2ZWx0ZVwiOiBcIi4vZGlzdC9zdmVsdGVraXQvaW5kZXgubWpzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L3N2ZWx0ZWtpdC9pbmRleC5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi92dWVcIjoge1xuICAgICAgXCJicm93c2VyXCI6IFwiLi9kaXN0L3Z1ZS9pbmRleC5tanNcIixcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3Z1ZS9pbmRleC5tanNcIixcbiAgICAgIFwicmVxdWlyZVwiOiBcIi4vZGlzdC92dWUvaW5kZXguanNcIlxuICAgIH1cbiAgfSxcbiAgXCJtYWluXCI6IFwiLi9kaXN0L2luZGV4LmpzXCIsXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxuICBcInR5cGVzVmVyc2lvbnNcIjoge1xuICAgIFwiKlwiOiB7XG4gICAgICBcIipcIjogW1xuICAgICAgICBcImRpc3QvaW5kZXguZC50c1wiXG4gICAgICBdLFxuICAgICAgXCJyZWFjdFwiOiBbXG4gICAgICAgIFwiZGlzdC9yZWFjdC9pbmRleC5kLnRzXCJcbiAgICAgIF0sXG4gICAgICBcIm5leHRcIjogW1xuICAgICAgICBcImRpc3QvbmV4dC9pbmRleC5kLnRzXCJcbiAgICAgIF0sXG4gICAgICBcIm51eHRcIjogW1xuICAgICAgICBcImRpc3QvbnV4dC9pbmRleC5kLnRzXCJcbiAgICAgIF0sXG4gICAgICBcInJlbWl4XCI6IFtcbiAgICAgICAgXCJkaXN0L3JlbWl4L2luZGV4LmQudHNcIlxuICAgICAgXSxcbiAgICAgIFwic3ZlbHRla2l0XCI6IFtcbiAgICAgICAgXCJkaXN0L3N2ZWx0ZWtpdC9pbmRleC5kLnRzXCJcbiAgICAgIF0sXG4gICAgICBcInZ1ZVwiOiBbXG4gICAgICAgIFwiZGlzdC92dWUvaW5kZXguZC50c1wiXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwiYnVpbGRcIjogXCJ0c3VwICYmIHBucG0gY29weS1hc3Ryb1wiLFxuICAgIFwiY29weS1hc3Ryb1wiOiBcImNwIC1SIHNyYy9hc3RybyBkaXN0L1wiLFxuICAgIFwiZGV2XCI6IFwicG5wbSBjb3B5LWFzdHJvICYmIHRzdXAgLS13YXRjaFwiLFxuICAgIFwicG9zdGluc3RhbGxcIjogXCJub2RlIHNjcmlwdHMvcG9zdGluc3RhbGwubWpzXCIsXG4gICAgXCJsaW50XCI6IFwiZXNsaW50IC5cIixcbiAgICBcImxpbnQtZml4XCI6IFwiZXNsaW50IC4gLS1maXhcIixcbiAgICBcInRlc3RcIjogXCJqZXN0XCIsXG4gICAgXCJ0eXBlLWNoZWNrXCI6IFwidHNjIC0tbm9FbWl0XCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHJlbWl4LXJ1bi9yZWFjdFwiOiBcIl4yLjUuMFwiLFxuICAgIFwiQHN2ZWx0ZWpzL2tpdFwiOiBcIl4yLjdcIixcbiAgICBcIkBzd2MvY29yZVwiOiBcIl4xLjMuMTAzXCIsXG4gICAgXCJAc3djL2plc3RcIjogXCJeMC4yLjI5XCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjYuMi4wXCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCI6IFwiXjE0LjEuMlwiLFxuICAgIFwiQHR5cGVzL2plc3RcIjogXCJeMjkuNS4xMVwiLFxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMjAuMTEuNFwiLFxuICAgIFwiQHR5cGVzL3JlYWN0XCI6IFwiXjE4LjIuNDhcIixcbiAgICBcImNvcHlmaWxlc1wiOiBcIl4yLjQuMVwiLFxuICAgIFwiamVzdFwiOiBcIl4yOS43LjBcIixcbiAgICBcImplc3QtZW52aXJvbm1lbnQtanNkb21cIjogXCJeMjkuNy4wXCIsXG4gICAgXCJuZXh0XCI6IFwiXjE0LjAuNFwiLFxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCIsXG4gICAgXCJzdmVsdGVcIjogXCJeNVwiLFxuICAgIFwidHN1cFwiOiBcIjcuMi4wXCIsXG4gICAgXCJ2dWVcIjogXCJeMy40LjE0XCIsXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwiXjQuMi41XCJcbiAgfSxcbiAgXCJwZWVyRGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBzdmVsdGVqcy9raXRcIjogXCJeMSB8fCBeMlwiLFxuICAgIFwibmV4dFwiOiBcIj49IDEzXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOCB8fCBeMTlcIixcbiAgICBcInN2ZWx0ZVwiOiBcIj49IDRcIixcbiAgICBcInZ1ZVwiOiBcIl4zXCIsXG4gICAgXCJ2dWUtcm91dGVyXCI6IFwiXjRcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNNZXRhXCI6IHtcbiAgICBcIkBzdmVsdGVqcy9raXRcIjoge1xuICAgICAgXCJvcHRpb25hbFwiOiB0cnVlXG4gICAgfSxcbiAgICBcIm5leHRcIjoge1xuICAgICAgXCJvcHRpb25hbFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInJlYWN0XCI6IHtcbiAgICAgIFwib3B0aW9uYWxcIjogdHJ1ZVxuICAgIH0sXG4gICAgXCJzdmVsdGVcIjoge1xuICAgICAgXCJvcHRpb25hbFwiOiB0cnVlXG4gICAgfSxcbiAgICBcInZ1ZVwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9LFxuICAgIFwidnVlLXJvdXRlclwiOiB7XG4gICAgICBcIm9wdGlvbmFsXCI6IHRydWVcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBpbml0UXVldWUgPSAoKTogdm9pZCA9PiB7XG4gIC8vIGluaXRpYWxpemUgdmEgdW50aWwgc2NyaXB0IGlzIGxvYWRlZFxuICBpZiAod2luZG93LnNpKSByZXR1cm47XG5cbiAgd2luZG93LnNpID0gZnVuY3Rpb24gYSguLi5wYXJhbXMpOiB2b2lkIHtcbiAgICAod2luZG93LnNpcSA9IHdpbmRvdy5zaXEgfHwgW10pLnB1c2gocGFyYW1zKTtcbiAgfTtcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNCcm93c2VyKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGRldGVjdEVudmlyb25tZW50KCk6ICdkZXZlbG9wbWVudCcgfCAncHJvZHVjdGlvbicge1xuICB0cnkge1xuICAgIGNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WO1xuICAgIGlmIChlbnYgPT09ICdkZXZlbG9wbWVudCcgfHwgZW52ID09PSAndGVzdCcpIHtcbiAgICAgIHJldHVybiAnZGV2ZWxvcG1lbnQnO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGRvIG5vdGhpbmcsIHRoaXMgaXMgb2theVxuICB9XG4gIHJldHVybiAncHJvZHVjdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb2R1Y3Rpb24oKTogYm9vbGVhbiB7XG4gIHJldHVybiBkZXRlY3RFbnZpcm9ubWVudCgpID09PSAncHJvZHVjdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RldmVsb3BtZW50KCk6IGJvb2xlYW4ge1xuICByZXR1cm4gZGV0ZWN0RW52aXJvbm1lbnQoKSA9PT0gJ2RldmVsb3BtZW50Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVSb3V0ZShcbiAgcGF0aG5hbWU6IHN0cmluZyB8IG51bGwsXG4gIHBhdGhQYXJhbXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IHN0cmluZ1tdPiB8IG51bGwsXG4pOiBzdHJpbmcgfCBudWxsIHtcbiAgaWYgKCFwYXRobmFtZSB8fCAhcGF0aFBhcmFtcykge1xuICAgIHJldHVybiBwYXRobmFtZTtcbiAgfVxuXG4gIGxldCByZXN1bHQgPSBwYXRobmFtZTtcbiAgdHJ5IHtcbiAgICBjb25zdCBlbnRyaWVzID0gT2JqZWN0LmVudHJpZXMocGF0aFBhcmFtcyk7XG4gICAgLy8gc2ltcGxlIGtleXMgbXVzdCBiZSBoYW5kbGVkIGZpcnN0XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgZW50cmllcykge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBjb25zdCBtYXRjaGVyID0gdHVyblZhbHVlVG9SZWdFeHAodmFsdWUpO1xuICAgICAgICBpZiAobWF0Y2hlci50ZXN0KHJlc3VsdCkpIHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShtYXRjaGVyLCBgL1ske2tleX1dYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYXJyYXkgdmFsdWVzIG5leHRcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBlbnRyaWVzKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgY29uc3QgbWF0Y2hlciA9IHR1cm5WYWx1ZVRvUmVnRXhwKHZhbHVlLmpvaW4oJy8nKSk7XG4gICAgICAgIGlmIChtYXRjaGVyLnRlc3QocmVzdWx0KSkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKG1hdGNoZXIsIGAvWy4uLiR7a2V5fV1gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHBhdGhuYW1lO1xuICB9XG59XG5cbmZ1bmN0aW9uIHR1cm5WYWx1ZVRvUmVnRXhwKHZhbHVlOiBzdHJpbmcpOiBSZWdFeHAge1xuICByZXR1cm4gbmV3IFJlZ0V4cChgLyR7ZXNjYXBlUmVnRXhwKHZhbHVlKX0oPz1bLz8jXXwkKWApO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XG59XG4iLCJpbXBvcnQgeyBuYW1lIGFzIHBhY2thZ2VOYW1lLCB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcbmltcG9ydCB7IGluaXRRdWV1ZSB9IGZyb20gJy4vcXVldWUnO1xuaW1wb3J0IHR5cGUgeyBTcGVlZEluc2lnaHRzUHJvcHMgfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IGlzQnJvd3NlciwgaXNEZXZlbG9wbWVudCwgY29tcHV0ZVJvdXRlIH0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IFNDUklQVF9VUkwgPSBgaHR0cHM6Ly92YS52ZXJjZWwtc2NyaXB0cy5jb20vdjEvc3BlZWQtaW5zaWdodHNgO1xuY29uc3QgUFJPRF9TQ1JJUFRfVVJMID0gYCR7U0NSSVBUX1VSTH0vc2NyaXB0LmpzYDtcbmNvbnN0IERFVl9TQ1JJUFRfVVJMID0gYCR7U0NSSVBUX1VSTH0vc2NyaXB0LmRlYnVnLmpzYDtcbmNvbnN0IFBST1hZX1NDUklQVF9VUkwgPSBgL192ZXJjZWwvc3BlZWQtaW5zaWdodHMvc2NyaXB0LmpzYDtcblxuLyoqXG4gKiBJbmplY3RzIHRoZSBWZXJjZWwgU3BlZWQgSW5zaWdodHMgc2NyaXB0IGludG8gdGhlIHBhZ2UgaGVhZCBhbmQgc3RhcnRzIHRyYWNraW5nIHBhZ2Ugdmlld3MuIFJlYWQgbW9yZSBpbiBvdXIgW2RvY3VtZW50YXRpb25dKGh0dHBzOi8vdmVyY2VsLmNvbS9kb2NzL3NwZWVkLWluc2lnaHRzKS5cbiAqIEBwYXJhbSBbcHJvcHNdIC0gU3BlZWQgSW5zaWdodHMgb3B0aW9ucy5cbiAqIEBwYXJhbSBbcHJvcHMuZGVidWddIC0gV2hldGhlciB0byBlbmFibGUgZGVidWcgbG9nZ2luZyBpbiBkZXZlbG9wbWVudC4gRGVmYXVsdHMgdG8gYHRydWVgLlxuICogQHBhcmFtIFtwcm9wcy5iZWZvcmVTZW5kXSAtIEEgbWlkZGxld2FyZSBmdW5jdGlvbiB0byBtb2RpZnkgZXZlbnRzIGJlZm9yZSB0aGV5IGFyZSBzZW50LiBTaG91bGQgcmV0dXJuIHRoZSBldmVudCBvYmplY3Qgb3IgYG51bGxgIHRvIGNhbmNlbCB0aGUgZXZlbnQuXG4gKiBAcGFyYW0gW3Byb3BzLnNhbXBsZVJhdGVdIC0gV2hlbiBzZXR0aW5nIHRvIDAuNSwgNTAlIG9mIHRoZSBldmVudHMgd2lsbCBiZSBzZW50IHRvIFZlcmNlbCBTcGVlZCBJbnNpZ2h0cy4gRGVmYXVsdHMgdG8gYDFgLlxuICogQHBhcmFtIFtwcm9wcy5yb3V0ZV0gLSBUaGUgZHluYW1pYyByb3V0ZSBvZiB0aGUgcGFnZS5cbiAqIEBwYXJhbSBbcHJvcHMuZHNuXSAtIFRoZSBEU04gb2YgdGhlIHByb2plY3QgdG8gc2VuZCBldmVudHMgdG8uIE9ubHkgcmVxdWlyZWQgd2hlbiBzZWxmLWhvc3RpbmcuXG4gKi9cbmZ1bmN0aW9uIGluamVjdFNwZWVkSW5zaWdodHMoXG4gIHByb3BzOiBTcGVlZEluc2lnaHRzUHJvcHMgJiB7XG4gICAgZnJhbWV3b3JrPzogc3RyaW5nO1xuICB9ID0ge30sXG4pOiB7XG4gIHNldFJvdXRlOiAocm91dGU6IHN0cmluZyB8IG51bGwpID0+IHZvaWQ7XG59IHwgbnVsbCB7XG4gIC8vIFdoZW4gcm91dGUgaXMgbnVsbCwgaXQgbWVhbnMgdGhhdCBwYWdlcyByb3V0ZXIgaXMgbm90IHJlYWR5IHlldC4gV2lsbCByZXNvbHZlIHNvb25cbiAgaWYgKCFpc0Jyb3dzZXIoKSB8fCBwcm9wcy5yb3V0ZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgaW5pdFF1ZXVlKCk7XG5cbiAgY29uc3QgaXNTZWxmSG9zdGVkID0gQm9vbGVhbihwcm9wcy5kc24pO1xuXG4gIGNvbnN0IHByb2R1Y3Rpb25TY3JpcHQgPSBpc1NlbGZIb3N0ZWQgPyBQUk9EX1NDUklQVF9VUkwgOiBQUk9YWV9TQ1JJUFRfVVJMO1xuXG4gIGNvbnN0IHNyYyA9XG4gICAgcHJvcHMuc2NyaXB0U3JjIHx8IChpc0RldmVsb3BtZW50KCkgPyBERVZfU0NSSVBUX1VSTCA6IHByb2R1Y3Rpb25TY3JpcHQpO1xuXG4gIGlmIChkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmMqPVwiJHtzcmN9XCJdYCkpIHJldHVybiBudWxsO1xuXG4gIGlmIChwcm9wcy5iZWZvcmVTZW5kKSB7XG4gICAgd2luZG93LnNpPy4oJ2JlZm9yZVNlbmQnLCBwcm9wcy5iZWZvcmVTZW5kKTtcbiAgfVxuXG4gIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICBzY3JpcHQuc3JjID0gc3JjO1xuICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICBzY3JpcHQuZGF0YXNldC5zZGtuID1cbiAgICBwYWNrYWdlTmFtZSArIChwcm9wcy5mcmFtZXdvcmsgPyBgLyR7cHJvcHMuZnJhbWV3b3JrfWAgOiAnJyk7XG4gIHNjcmlwdC5kYXRhc2V0LnNka3YgPSB2ZXJzaW9uO1xuXG4gIGlmIChwcm9wcy5zYW1wbGVSYXRlKSB7XG4gICAgc2NyaXB0LmRhdGFzZXQuc2FtcGxlUmF0ZSA9IHByb3BzLnNhbXBsZVJhdGUudG9TdHJpbmcoKTtcbiAgfVxuICBpZiAocHJvcHMucm91dGUpIHtcbiAgICBzY3JpcHQuZGF0YXNldC5yb3V0ZSA9IHByb3BzLnJvdXRlO1xuICB9XG4gIGlmIChwcm9wcy5lbmRwb2ludCkge1xuICAgIHNjcmlwdC5kYXRhc2V0LmVuZHBvaW50ID0gcHJvcHMuZW5kcG9pbnQ7XG4gIH1cbiAgaWYgKHByb3BzLmRzbikge1xuICAgIHNjcmlwdC5kYXRhc2V0LmRzbiA9IHByb3BzLmRzbjtcbiAgfVxuICBpZiAoaXNEZXZlbG9wbWVudCgpICYmIHByb3BzLmRlYnVnID09PSBmYWxzZSkge1xuICAgIHNjcmlwdC5kYXRhc2V0LmRlYnVnID0gJ2ZhbHNlJztcbiAgfVxuXG4gIHNjcmlwdC5vbmVycm9yID0gKCk6IHZvaWQgPT4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlIC0tIExvZ2dpbmcgaXMgb2theSBoZXJlXG4gICAgY29uc29sZS5sb2coXG4gICAgICBgW1ZlcmNlbCBTcGVlZCBJbnNpZ2h0c10gRmFpbGVkIHRvIGxvYWQgc2NyaXB0IGZyb20gJHtzcmN9LiBQbGVhc2UgY2hlY2sgaWYgYW55IGNvbnRlbnQgYmxvY2tlcnMgYXJlIGVuYWJsZWQgYW5kIHRyeSBhZ2Fpbi5gLFxuICAgICk7XG4gIH07XG5cbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gIHJldHVybiB7XG4gICAgc2V0Um91dGU6IChyb3V0ZTogc3RyaW5nIHwgbnVsbCk6IHZvaWQgPT4ge1xuICAgICAgc2NyaXB0LmRhdGFzZXQucm91dGUgPSByb3V0ZSA/PyB1bmRlZmluZWQ7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IHsgaW5qZWN0U3BlZWRJbnNpZ2h0cywgY29tcHV0ZVJvdXRlIH07XG5leHBvcnQgdHlwZSB7IFNwZWVkSW5zaWdodHNQcm9wcyB9O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWRlZmF1bHQtZXhwb3J0IC0tIEFsbG93IGRlZmF1bHQgZXhwb3J0XG5leHBvcnQgZGVmYXVsdCB7XG4gIGluamVjdFNwZWVkSW5zaWdodHMsXG4gIGNvbXB1dGVSb3V0ZSxcbn07XG4iLCIndXNlIGNsaWVudCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5uZWNlc3NhcnktY29uZGl0aW9uIC0tIGNhbiBiZSBlbXB0eSBpbiBwYWdlcyByb3V0ZXIgKi9cbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlUGF0aG5hbWUsIHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ25leHQvbmF2aWdhdGlvbi5qcyc7XG5pbXBvcnQgeyBjb21wdXRlUm91dGUgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCB1c2VSb3V0ZSA9ICgpOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgY29uc3QgcGFyYW1zID0gdXNlUGFyYW1zKCk7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpIHx8IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgcGF0aCA9IHVzZVBhdGhuYW1lKCk7XG5cbiAgY29uc3QgZmluYWxQYXJhbXMgPSB7XG4gICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKHNlYXJjaFBhcmFtcy5lbnRyaWVzKCkpLFxuICAgIC4uLihwYXJhbXMgfHwge30pLFxuICB9O1xuXG4gIHJldHVybiBwYXJhbXMgPyBjb21wdXRlUm91dGUocGF0aCwgZmluYWxQYXJhbXMpIDogbnVsbDtcbn07XG4iXSwibmFtZXMiOlsiU3BlZWRJbnNpZ2h0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/../../../node_modules/@vercel/speed-insights/dist/next/index.mjs\n");

/***/ }),

/***/ "(rsc)/../../../node_modules/@vercel/speed-insights/dist/next/index.mjs":
/*!************************************************************************!*\
  !*** ../../../node_modules/@vercel/speed-insights/dist/next/index.mjs ***!
  \************************************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeedInsights: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-flight-loader/module-proxy */ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js");


const proxy = await (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Tom\node_modules\@vercel\speed-insights\dist\next\index.mjs`)
const e0 = proxy["SpeedInsights"];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ })

};
;