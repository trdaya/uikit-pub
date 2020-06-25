import styled from "styled-components";
import PropTypes from "prop-types";

const Button = styled.button`
  border: ${p =>
    p.variant === "plain"
      ? "none"
      : p.variant === "secondary"
      ? "2px solid green"
      : "2px solid lightblue"};

  padding: ${p =>
    p.size === "tiny"
      ? "5px 10px"
      : p.size === "small"
      ? "10px 20px"
      : p.size === "medium"
      ? "15px 30px"
      : p.size === "big"
      ? "20px 40px"
      : "25px 60px"};
  border-radius: 4px;
`;

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
