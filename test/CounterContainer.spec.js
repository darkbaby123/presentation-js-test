import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import reducer from '../src/reducer'
import CounterContainer from '../src/CounterContainer'

function setup(counter = 0) {
  const store = createStore(reducer, { counter })
  const wrapper = mount(
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  )

  return { store, wrapper }
}

describe('<CounterContainer />', () => {
  it('displays init count', () => {
    const { wrapper } = setup()
    expect(wrapper.find('h1').text()).toEqual('Count 0')
  })

  it('handles increment', () => {
    const { store, wrapper } = setup()
    wrapper.find('button').at(0).simulate('click')
    expect(wrapper.find('h1').text()).toEqual('Count 1')
  })

  it('handles decrement', () => {
    const { store, wrapper } = setup(1)
    wrapper.find('button').at(1).simulate('click')
    expect(wrapper.find('h1').text()).toEqual('Count 0')
  })
})
