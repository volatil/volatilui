"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Select;
var _react = require("react");
require("../css/labels.css");
var _jsxRuntime = require("react/jsx-runtime");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Select(_ref) {
  var className = _ref.className,
    style = _ref.style,
    children = _ref.children,
    label = _ref.label;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    stateDesplegado = _useState2[0],
    setstateDesplegado = _useState2[1];
  var _useState3 = (0, _react.useState)(children[0].props.children),
    _useState4 = _slicedToArray(_useState3, 2),
    stateOption = _useState4[0],
    setstateOption = _useState4[1];
  var _useState5 = (0, _react.useState)(children[0].props.value),
    _useState6 = _slicedToArray(_useState5, 2),
    stateOptionValue = _useState6[0],
    setstateOptionValue = _useState6[1];
  var arrow = {
    up: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        fill: "none",
        stroke: "black",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2.5",
        d: "m17 14l-5-5m0 0l-5 5"
      })
    }),
    down: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        fill: "none",
        stroke: "black",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2.5",
        d: "m7 10l5 5m0 0l5-5"
      })
    })
  };
  var clickOut = function clickOut() {
    setstateDesplegado(false);
  };
  var toggle = function toggle() {
    setstateDesplegado(!stateDesplegado);
  };
  (0, _react.useEffect)(function () {
    var toggleClickOut = function toggleClickOut(e) {
      if (!e.target.closest('.elselect')) {
        clickOut();
      }
    };
    document.body.addEventListener('click', toggleClickOut);
    return function () {
      document.body.removeEventListener('click', toggleClickOut);
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "elselect ".concat(className),
      onClick: toggle,
      "data-desplegado": stateDesplegado,
      "data-value": stateOptionValue,
      "data-option": stateOption,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "principal",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "label",
          children: label ? label : null
        }), children ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "option",
          "data-value": stateOptionValue,
          children: stateOption
        }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "arrow",
          children: stateDesplegado ? arrow.up : arrow.down
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "options",
        children: children ? children.map(function (child, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            "data-active": stateOption == child.props.children ? "true" : "false",
            className: "option",
            onClick: function onClick() {
              return setstateOption(child.props.children), setstateOptionValue(child.props.value);
            },
            "data-value": child.props.value,
            children: child.props.children
          }, index);
        }) : null
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
        className: className,
        style: {
          style: style
        },
        children: children ? children : null
      })]
    })
  });
}