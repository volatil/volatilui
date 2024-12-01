"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ScrollArea;
require("../css/labels.css");
var _jsxRuntime = require("react/jsx-runtime");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function ScrollArea(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? "" : _ref$style,
    children = _ref.children,
    _ref$scrolly = _ref.scrolly,
    scrolly = _ref$scrolly === void 0 ? false : _ref$scrolly,
    _ref$scrollx = _ref.scrollx,
    scrollx = _ref$scrollx === void 0 ? false : _ref$scrollx,
    _ref$colorbar = _ref.colorbar,
    colorbar = _ref$colorbar === void 0 ? "#567a97" : _ref$colorbar,
    _ref$colorbg = _ref.colorbg,
    colorbg = _ref$colorbg === void 0 ? "#182B3A" : _ref$colorbg;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "thescrollarea ".concat(className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      overflowY: scrolly ? "scroll" : "",
      overflowX: scrollx ? "scroll" : ""
    }),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
      children: "\n                    .thescrollarea::-webkit-scrollbar-thumb {\n                        background-color: ".concat(colorbar, ";\n                    }\n                    .thescrollarea::-webkit-scrollbar-track {\n                        background-color: ").concat(colorbg, ";\n                    }\n                ")
    }), children]
  });
}