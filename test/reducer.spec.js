import reducer from '../src/reducer'
import { INCREMENT, DECREMENT } from '../src/actions'

describe('reducer', () => {
  it('handles init state', () => {
    expect(reducer(undefined, {})).toEqual({ counter: 0 })
  })

  it('handles increment', () => {
    expect(reducer({ counter: 0 }, { type: INCREMENT })).toEqual({ counter: 1 })
  })

  it('handles decrement', () => {
    expect(reducer({ counter: 1 }, { type: DECREMENT })).toEqual({ counter: 0 })
  })
})
