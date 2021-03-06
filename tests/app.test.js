import React from 'react'
import { mount } from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const expected = 'test component'
  const wrapper = mount(<App />)
  expect(wrapper.text()).toMatch(expected)
})
