"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
require("../css/labels.css");
var _jsxRuntime = require("react/jsx-runtime");
function Modal(_ref) {
  var _ref$classBg = _ref.classBg,
    classBg = _ref$classBg === void 0 ? "" : _ref$classBg,
    _ref$classContent = _ref.classContent,
    classContent = _ref$classContent === void 0 ? "" : _ref$classContent,
    _ref$styleBg = _ref.styleBg,
    styleBg = _ref$styleBg === void 0 ? "" : _ref$styleBg,
    _ref$styleContent = _ref.styleContent,
    styleContent = _ref$styleContent === void 0 ? "" : _ref$styleContent,
    children = _ref.children,
    visible = _ref.visible,
    trigger = _ref.trigger;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("section", {
      className: "themodal_bg ".concat(classBg),
      style: {
        styleBg: styleBg
      },
      onClick: trigger,
      "data-visible": visible
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
      className: "themodal_content ".concat(classContent),
      style: {
        styleContent: styleContent
      },
      "data-visible": visible,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        onClick: trigger,
        children: "x"
      }), children]
    })]
  });
}