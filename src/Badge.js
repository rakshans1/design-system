import React from 'react'
import styled from 'styled-components'
import { color, propTypes, space } from 'styled-system'
import theme from './theme'

const subtleBackgroundColor = {
  gray: theme.colors.lightGray,
  blue: theme.colors.lightBlue,
  green: theme.colors.lightGreen,
  purple: theme.colors.lightPurple,
  orange: theme.colors.lightOrange,
  red: theme.colors.lightRed
}

const subtleTextColor = {
  gray: theme.colors.text,
  blue: theme.colors.blue,
  green: theme.colors.green,
  purple: theme.colors.purple,
  orange: theme.colors.text,
  red: theme.colors.red
}

const boldBackgroundColor = {
  gray: theme.colors.gray,
  blue: theme.colors.blue,
  green: theme.colors.green,
  purple: theme.colors.purple,
  orange: theme.colors.orange,
  red: theme.colors.red,
  white: theme.colors.white
}

const boldTextColor = {
  gray: theme.colors.white,
  blue: theme.colors.white,
  green: theme.colors.white,
  purple: theme.colors.white,
  orange: theme.colors.text,
  red: theme.colors.white,
  white: theme.colors.text
}

const fontWeight = {
  regular: theme.regular,
  bold: theme.bold
}

const textTransform = {
  capitalize: 'capitalize',
  uppercase: 'uppercase'
}

const getBackgroundColor = ({ status, isBold }) =>
  isBold ? boldBackgroundColor[status] : subtleBackgroundColor[status]

const getTextColor = ({ status, isBold }) =>
  isBold ? boldTextColor[status] : subtleTextColor[status]

const getFontWeight = ({ isBold }) =>
  isBold ? fontWeight.bold : fontWeight.regular

const getTextTransform = ({ isBold }) =>
  isBold ? textTransform.uppercase : textTransform.capitalize

const Badge = styled.div`
  height: 24px;
  color: ${getTextColor};
  background-color: ${getBackgroundColor};
  font-family: inherit;
  line-height: 24px;
  font-size: ${props => props.theme.fontSizes[0]}px;
  font-weight: ${getFontWeight};
  text-transform: ${getTextTransform};
  padding-left: ${props => props.theme.space[2]}px;
  padding-right: ${props => props.theme.space[2]}px;
  border-radius: ${props => props.theme.radius};
  display: inline-block;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: antialiased;
  ${space};
`

Badge.displayName = 'Badge'

Badge.propTypes = {
  ...propTypes.color
}

Badge.defaultProps = {
  theme: theme
}

export default Badge
