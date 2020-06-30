import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Types } from './constants'
import theme from '../../../constants/themes'
import { getRem } from '../../../constants/css'

const Wrapper = styled.button`
  color: ${(p) =>
    p.type === Types.SECONDARY
      ? theme.colors.visitedRed
      : theme.colors.brightGreen};
  padding: ${getRem(10)};
  border: ${getRem(2)} solid black;
`

const Button = ({ text, type }) => <Wrapper type={type}>{text}</Wrapper>
Button.defaultProps = {
  text: 'Click me',
  type: Types.PRIMARY
}
Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(Object.values(Types))
}

export default Button
