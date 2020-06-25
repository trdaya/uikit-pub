"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteralLoose2.default)(["\n  border: ", ";\n\n  padding: ", ";\n  border-radius: 4px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Button = _styledComponents.default.button(_templateObject(), function (p) {
  return p.variant === "plain" ? "none" : p.variant === "secondary" ? "2px solid green" : "2px solid lightblue";
}, function (p) {
  return p.size === "tiny" ? "5px 10px" : p.size === "small" ? "10px 20px" : p.size === "medium" ? "15px 30px" : p.size === "big" ? "20px 40px" : "25px 60px";
});

Button.defaultProps = {
  variant: "primary",
  size: "medium"
};
Button.propTypes = {
  variant: _propTypes.default.oneOf(["primary", "secondary", "plain"]),
  size: _propTypes.default.oneOf(["tiny", "small", "medium", "big", "huge"]),
  onClick: _propTypes.default.func
};
var _default = Button;
exports.default = _default;