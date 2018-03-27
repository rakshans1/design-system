import React from 'react'
import { storiesOf } from '@storybook/react'
import { EmptyState } from '../src'

storiesOf('EmptyState', module).add('EmptyState', () => (
  <EmptyState
    header="I am the header"
    description="Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content."
    imageUrl="https://images.unsplash.com/photo-1495249663117-4143f6ab09d8?ixlib=rb-0.3.5&s=ea3150da77d1ee99136389b0329faed0&auto=format&fit=crop&w=3734&q=80"
    actionText="Primary action"
    actionUrl="https://priceline.com"
  />
))
