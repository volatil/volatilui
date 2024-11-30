"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Accordion;
require("../css/labels.css");
var _jsxRuntime = require("react/jsx-runtime");
function Accordion(_ref) {
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? "" : _ref$style,
    children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
    className: "theaccordion ".concat(className),
    style: {
      style: style
    },
    children: children
  });
}
Accordion.Section = function Section(_ref2) {
  var _ref2$className = _ref2.className,
    className = _ref2$className === void 0 ? "" : _ref2$className,
    _ref2$style = _ref2.style,
    style = _ref2$style === void 0 ? "" : _ref2$style,
    children = _ref2.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "theaccordion-section ".concat(className),
    style: {
      style: style
    },
    children: children
  });
};
Accordion.Title = function Title(_ref3) {
  var _ref3$className = _ref3.className,
    className = _ref3$className === void 0 ? "" : _ref3$className,
    _ref3$style = _ref3.style,
    style = _ref3$style === void 0 ? "" : _ref3$style,
    children = _ref3.children;
  var toggle = function toggle(event) {
    event.currentTarget.parentNode.classList.toggle('desplegar');
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
    onClick: toggle,
    className: "theaccordion-title ".concat(className),
    style: {
      style: style
    },
    children: children
  });
};
Accordion.Content = function Content(_ref4) {
  var _ref4$className = _ref4.className,
    className = _ref4$className === void 0 ? "" : _ref4$className,
    _ref4$style = _ref4.style,
    style = _ref4$style === void 0 ? "" : _ref4$style,
    children = _ref4.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "theaccordion-content ".concat(className),
    style: {
      style: style
    },
    children: children
  });
};