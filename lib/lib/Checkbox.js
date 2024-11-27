"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Checkbox;
var _react = require("react");
require("../css/labels.css");
var _jsxRuntime = require("react/jsx-runtime");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Checkbox(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    style = _ref.style,
    label = _ref.label,
    checked = _ref.checked,
    disabled = _ref.disabled;
  var _useState = (0, _react.useState)(checked ? true : false),
    _useState2 = _slicedToArray(_useState, 2),
    stateChecked = _useState2[0],
    setstateChecked = _useState2[1];
  var check = {
    checked: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
        fill: "none",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          width: "18.5",
          height: "18.5",
          x: "2.75",
          y: "2.75",
          stroke: "black",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1.5",
          rx: "4"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
          fill: "black",
          d: "M7.113 6.25a.86.86 0 0 0-.863.862v9.775c0 .477.386.863.862.863h9.775a.863.863 0 0 0 .863-.863V7.114a.863.863 0 0 0-.863-.863z"
        })]
      })
    }),
    uncheked: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        fill: "none",
        stroke: "black",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        d: "M4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h9.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.428.218-.986.218-2.104V7.197c0-1.118 0-1.678-.218-2.105a2 2 0 0 0-.875-.874C18.48 4 17.92 4 16.8 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2"
      })
    })
  };
  var toggle = function toggle() {
    setstateChecked(!stateChecked);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
    onClick: disabled ? null : toggle,
    className: "elcheckbox ".concat(className),
    style: style,
    "data-disabled": disabled ? true : false,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: {
        width: "20px"
      },
      children: stateChecked ? check.checked : check.uncheked
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: label
    })]
  });
}