import * as actions from '../src/actions'

describe('actions', () => {
  it('increment', () => {
    expect(actions.increment()).toEqual({ type: actions.INCREMENT })
  })

  it('decrement', () => {
    expect(actions.decrement()).toEqual({ type: actions.DECREMENT })
  })
})
