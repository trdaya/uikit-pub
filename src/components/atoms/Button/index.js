import React from "react";
import styled from 'styled-components';

const Wrapper=styled.button`
color:${p=>p.theme.colors.darkGreen};
padding: 10px;
border: 2px solid black;
`

const Button= ({text,color})=>(<Wrapper color={color}>{text}</Wrapper>)

export default Button
