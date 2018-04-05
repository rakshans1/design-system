import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Flex, Heading, Hide, Text } from '../src'
import { space, color } from 'styled-system'

const HiddenHeading = styled(Hide)`
  width: 200px;
  text-align: center;
  border-right: 1px solid #fff;

  & > h6 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: 1px;
  }
`

const PromoDescription = styled(Box)`
  & > p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`

const PromoBar = ({ title, description, ...props }) => (
  <Box {...props}>
    <Flex align="center">
      <HiddenHeading xs sm md lg pr={3} mr={3}>
        <Heading.h6 color="white">{title}</Heading.h6>
      </HiddenHeading>
      <PromoDescription>
        <Text.p fontSize={[0, 0, 0, 1]} color="white" m={0}>
          {description}
        </Text.p>
      </PromoDescription>
    </Flex>
  </Box>
)

PromoBar.displayName = 'PromoBar'

PromoBar.defaultProps = {
  bg: 'text',
  p: 3
}

export default PromoBar
