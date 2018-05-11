import React from 'react'
import * as icons from './icons'

const lowerFirst = str => str.charAt(0) + str.slice(1)

const getPath = name => icons[name || lowerFirst(name)]

const Icon = ({ name, size, ...props }) => {
  const icon = getPath(name)
  if (!icon) return false
  return icon
}

Icon.displayName = 'Icon'

Icon.defaultProps = {
  name: 'checkLight',
  size: 24
}

const keys = Object.keys({
  ...icons
})

Icon.propTypes = {
  name: ({ name }) => {
    if (!keys.includes(name)) {
      return new Error(
        `Failed prop type: Invalid prop name of value '${name}' supplied to Icon, expected one of ${keys.toString()} is expected`
      )
    }
  },
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string
}

export default Icon
