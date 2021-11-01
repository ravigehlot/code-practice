import prototypeMe from '../src/js/prototype'

describe('how prototype chain works', () => {
  test('function object has a constructor prototype', () => {
    expect(prototypeMe).toBeObject
    expect(prototypeMe).toBeFunction
    expect(prototypeMe.prototype).toBeObject
    expect(prototypeMe.prototype).toBeFunction
    expect(prototypeMe.prototype).toHaveProperty('constructor')
    expect(prototypeMe.prototype['constructor']['name']).toBe('prototypeMe')
    expect(prototypeMe.prototype.constructor.name).toBe('prototypeMe')
    expect(prototypeMe.prototype['constructor']).toHaveProperty('prototype')
    expect(prototypeMe.prototype['constructor']).toBeObject
    expect(prototypeMe.prototype['constructor']['prototype']).toBeObject
  })
})
