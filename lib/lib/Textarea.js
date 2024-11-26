"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Textarea;
require("../css/labels.css");
var _jsxRuntime = require("react/jsx-runtime");
// import React from 'react';

function Textarea(_ref) {
  var _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    label = _ref.label,
    value = _ref.value,
    type = _ref.type,
    disabled = _ref.disabled,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "" : _ref$placeholder;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: style,
    className: "elcampo ".concat(className),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
      "data-pista": label,
      defaultValue: value,
      disabled: disabled,
      placeholder: placeholder,
      required: true
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
      htmlFor: label,
      children: label
    })]
  });
}