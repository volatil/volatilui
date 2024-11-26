"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Input;
require("../css/labels.css");
var _Button = _interopRequireDefault(require("./Button"));
var _Svg = _interopRequireDefault(require("../components/Svg"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Input(_ref) {
  var _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    label = _ref.label,
    value = _ref.value,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "text" : _ref$type,
    _ref$accept = _ref.accept,
    accept = _ref$accept === void 0 ? "image/png, image/jpeg" : _ref$accept,
    disabled = _ref.disabled,
    nombrearchivo = _ref.nombrearchivo;
  return type === "file" ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button["default"], {
    className: "typefile ".concat(className),
    style: {
      position: "relative"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      onChange: onChange,
      type: "file",
      accept: accept
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Svg["default"], {
      style: {
        height: "15px"
      },
      icono: "upload",
      color: "var( --gris )"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      children: nombrearchivo ? nombrearchivo : "Cargar imagen"
    })]
  }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: style,
    "data-type": type,
    className: "elcampo ".concat(className),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      "data-pista": label,
      type: type,
      defaultValue: value,
      disabled: disabled,
      required: true
    }), type === "file" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Svg["default"], {
      style: {
        width: "40px"
      },
      icono: "upload",
      color: "var( --gris )"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      htmlFor: label,
      children: [" ", label, " "]
    })]
  });
}