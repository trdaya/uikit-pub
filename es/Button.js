import _taggedTemplateLiteralLoose from "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose";

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border: ", ";\n\n  padding: ", ";\n  border-radius: 4px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from "styled-components";
import PropTypes from "prop-types";
var Button = styled.button(_templateObject(), function (p) {
  return p.variant === "plain" ? "none" : p.variant === "secondary" ? "2px solid green" : "2px solid lightblue";
}, function (p) {
  return p.size === "tiny" ? "5px 10px" : p.size === "small" ? "10px 20px" : p.size === "medium" ? "15px 30px" : p.size === "big" ? "20px 40px" : "25px 60px";
});
Button.defaultProps = {
  variant: "primary",
  size: "medium"
};
Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "plain"]),
  size: PropTypes.oneOf(["tiny", "small", "medium", "big", "huge"]),
  onClick: PropTypes.func
};
export default Button;