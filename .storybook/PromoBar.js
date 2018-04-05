import React from 'react'
import { storiesOf, action } from '@storybook/react'
import { PromoBar, Box } from '../src'

storiesOf('PromoBar', module).add('Examples', () => (
  <Box>
    <PromoBar
      m={3}
      title="Promotion Title"
      description="Dolor socis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    />
    <PromoBar
      m={3}
      title="Color Background"
      description="Dolor socis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      bg="blue"
    />
    <PromoBar
      m={3}
      title="Truncated Promotion Title"
      description="This promotional description will be truncated on smaller screen sizes if it surpasses 2 lines of text."
    />
  </Box>
))
