import verifyScope from '../src/js/letConstVar'

describe('how Object Literals ES5, ES6 scopes work', () => {
  test('that ES6 method inside of Object Literal sees global variables', () => {
    expect(verifyScope).toBeObject()
    expect(verifyScope.es6()).toBeTruthy()
  })

  test('that ES5 method inside of Object Literal sees global variables', () => {
    expect(verifyScope.es5()).toBeTruthy()
  })
})
