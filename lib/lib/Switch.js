"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Switch;
var _react = require("react");
require("../css/labels.css");
var _jsxRuntime = require("react/jsx-runtime");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Switch(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? "" : _ref$style,
    label = _ref.label,
    _onClick = _ref.onClick;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    stateSwitch = _useState2[0],
    setstateSwitch = _useState2[1];
  var esStringOArray = function esStringOArray(variable) {
    if (typeof variable === "string") {
      return "string";
    } else if (Array.isArray(variable)) {
      return "array";
    }
    alert("Error: The label must be a string or an array.");
  };
  var toggle = function toggle() {
    setstateSwitch(!stateSwitch);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    onClick: function onClick(e) {
      toggle();
      if (_onClick) _onClick(e);
    },
    className: "theswitch ".concat(className),
    style: {
      style: style
    },
    "data-switch": stateSwitch,
    "data-type-label": esStringOArray(label),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {})
    }), esStringOArray(label) == "string" ? /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: label
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: stateSwitch ? label[0] : label[1]
    })]
  });
}