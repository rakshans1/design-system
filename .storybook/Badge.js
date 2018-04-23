import React from 'react'
import { storiesOf } from '@storybook/react'
import { Badge, Icon } from '../src'

storiesOf('Badge', module).add('Badge', () => (
  <div>
    <Badge status="gray" m={3} isBold>
      {' '}
      bold badge{' '}
    </Badge>
    <Badge status="gray" m={3}>
      {' '}
      subtle badge{' '}
    </Badge>
    <Badge status="blue" m={3} isBold>
      {' '}
      bold badge{' '}
    </Badge>
    <Badge status="blue" m={3}>
      {' '}
      subtle badge{' '}
    </Badge>
    <Badge status="green" m={3} isBold>
      {' '}
      bold badge{' '}
    </Badge>
    <Badge status="green" m={3}>
      {' '}
      subtle badge{' '}
    </Badge>
    <Badge status="purple" m={3} isBold>
      {' '}
      bold badge{' '}
    </Badge>
    <Badge status="purple" m={3}>
      {' '}
      subtle badge{' '}
    </Badge>
    <Badge status="orange" m={3} isBold>
      {' '}
      bold badge{' '}
    </Badge>
    <Badge status="orange" m={3}>
      {' '}
      subtle badge{' '}
    </Badge>
    <Badge status="red" m={3} isBold>
      {' '}
      bold badge{' '}
    </Badge>
    <Badge status="red" m={3}>
      {' '}
      subtle badge{' '}
    </Badge>
    <Badge status="white" m={3} isBold>
      {' '}
      bold badge{' '}
    </Badge>
    <Badge status="white" m={3}>
      {' '}
      subtle badge{' '}
    </Badge>
  </div>
))
