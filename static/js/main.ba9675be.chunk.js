(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{12:function(e,_,t){},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),C_Users_lenovo_Desktop_Mindbowser_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_App_css__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(12),_App_css__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(C_Users_lenovo_Desktop_Mindbowser_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),result=_useState2[0],setresult=_useState2[1],handleKeyDown=function handleKeyDown(_ref){var keyCode=_ref.keyCode,shiftKey=_ref.shiftKey;console.log(keyCode),keyCode>=48&&keyCode<=57&&!shiftKey?setresult(result+(keyCode-48)):keyCode>=96&&keyCode<=105?setresult(result+(keyCode-96)):107===keyCode||187===keyCode&&shiftKey?setresult(result+"+"):109===keyCode||189===keyCode?setresult(result+"-"):106===keyCode||56===keyCode&&shiftKey?setresult(result+"*"):111===keyCode||191===keyCode?setresult(result+"/"):53===keyCode&&shiftKey?setresult(result+"%"):110===keyCode||190===keyCode&&!shiftKey?setresult(result+"."):32===keyCode?setresult(result+" "):13===keyCode||187===keyCode&&!shiftKey?setresult(String(eval(result)).length>3&&String(eval(result)).includes(".")?String(eval(result).toFixed(4)):String(eval(result))):8===keyCode?setresult(result.substr(0,result.length-1)):27!==keyCode&&46!==keyCode||setresult("")};return Object(react__WEBPACK_IMPORTED_MODULE_2__.useEffect)((function(){return document.body.addEventListener("keydown",handleKeyDown),function(){return document.body.removeEventListener("keydown",handleKeyDown)}})),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"input",children:result}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid-4",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setresult("")},value:"",style:{backgroundColor:"#c04444"},children:"AC"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(){return setresult(result.substr(0,result.length-1))},children:"C"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"%",children:"%"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"/",className:"opt-button",children:"/"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid-4",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"7",children:"7"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"8",children:"8"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"9",children:"9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"*",className:"opt-button",children:"x"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid-4",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"4",children:"4"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"5",children:"5"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"6",children:"6"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"-",className:"opt-button",children:"-"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid-4",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"1",children:"1"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"2",children:"2"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"3",children:"3"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"+",className:"opt-button",children:"+"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid-4",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:"0",children:"0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:" ",children:" "}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function(e){return setresult(result+e.target.value)},value:".",children:"."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{onClick:function onClick(e){try{setresult(String(eval(result)).length>3&&String(eval(result)).includes(".")?String(eval(result).toFixed(4)):String(eval(result)))}catch(e){console.log(e)}},value:"=",style:{backgroundColor:"#018645"},children:"="})]})]})}__webpack_exports__.a=App},6:function(e,_,t){"use strict";t.r(_);var r=t(0),s=t(1),u=t.n(s),n=t(3),l=t.n(n),c=t(4);l.a.render(Object(r.jsx)(u.a.StrictMode,{children:Object(r.jsx)(c.a,{})}),document.getElementById("root"))}},[[6,1,2]]]);
//# sourceMappingURL=main.ba9675be.chunk.js.map