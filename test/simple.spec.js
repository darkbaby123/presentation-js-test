const add = require('../src/simple')

describe('simple', () => {
  it('add', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
