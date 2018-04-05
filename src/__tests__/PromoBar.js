import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import { PromoBar, theme } from '..'

describe('PromoBar', () => {
  test('renders default', () => {
    const json = renderer.create(<PromoBar />).toJSON()
    expect(json).toMatchSnapshot()
  })
})
