import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

import { Box, Button, Flex, Heading, Image, Text } from '../src'

const EmptyState = ({
  header,
  description,
  imageUrl,
  actionText,
  actionUrl,
  ...props
}) => (
  <Flex justify="space-around">
    <Box width={[1, 1 / 2]} p={[3, 5]} align="center" bg="lightGray">
      <Image
        src={imageUrl}
        style={{
          maxWidth: '300px',
          width: '100%',
          margin: 'auto'
        }}
      />
      <Heading.h2 my={3}>{header}</Heading.h2>
      <Text.p>{description}</Text.p>
      <Button href={actionUrl}>{actionText}</Button>
    </Box>
  </Flex>
)

EmptyState.displayName = 'EmptyState'

EmptyState.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  actionText: PropTypes.string,
  actionUrl: PropTypes.string
}

export default EmptyState
