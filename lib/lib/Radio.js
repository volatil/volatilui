"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Radio;
var _react = require("react");
require("../css/labels.css");
var _jsxRuntime = require("react/jsx-runtime");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Radio(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style,
    labels = _ref.labels,
    color_check = _ref.color_check,
    color_text = _ref.color_text;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    stateChecked = _useState2[0],
    setstateChecked = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    stateLabel = _useState4[0],
    setstateLabel = _useState4[1];
  var radio = {
    unchecked: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        fill: "none",
        stroke: color_check ? color_check : "black",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0"
      })
    }),
    checked: /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
      viewBox: "0 0 16 16",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        fill: color_check ? color_check : "black",
        d: "M8 15c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7M8 2C4.69 2 2 4.69 2 8s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
        cx: "8",
        cy: "8",
        r: "4",
        fill: color_check ? color_check : "black"
      })]
    })
  };
  var toggle = function toggle(label) {
    setstateChecked(!stateChecked);
    setstateLabel(label);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
    className: "elradio ".concat(className),
    "data-label": stateLabel,
    style: style,
    children: labels.map(function (label, i) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        onClick: function onClick() {
          return toggle(label);
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          children: label == stateLabel ? radio.checked : radio.unchecked
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          style: color_text ? {
            color: color_text
          } : {},
          children: label
        })]
      }, i);
    })
  });
}