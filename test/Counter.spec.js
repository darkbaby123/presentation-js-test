import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../src/Counter'

function setup(value = 0) {
  const actions = {
    increment: createSpy(),
    decrement: createSpy(),
  }

  const component = shallow(
    <Counter counter={value} {...actions} />
  )

  return {
    component,
    actions,
  }
}

describe('<Counter />', () => {
  it('displays count', () => {
    const { component } = setup(1)
    expect(component.find('h1').text()).toEqual('Count 1')
  })

  it('calls increment', () => {
    const { component, actions } = setup()
    component.find('button').at(0).simulate('click')
    expect(actions.increment).toHaveBeenCalled()
  })

  it('calls decrement', () => {
    const { component, actions } = setup()
    component.find('button').at(1).simulate('click')
    expect(actions.decrement).toHaveBeenCalled()
  })
})
