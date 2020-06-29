import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper=styled.button`
color:${p=>p.theme.colors.darkGreen};
padding: 10px;
border: 2px solid black;
`

const Button= ({text})=>(<Wrapper>{text}</Wrapper>)
Button.defaultProps={
  text:'Click me',
}
Button.propTypes={
  text:PropTypes.string,
}

export default Button
