import scope from '../src/js/objectLiteralScope'

describe('how Object Literals ES5 scopes work', () => {
  test('Regular functions can access its own this', () => {
    expect(scope.es5().testThis).toBeTruthy()
    expect(scope.es5syntax().testThis).toBeTruthy()
    expect(scope.es5().testFamilyObjAge).toBeBoolean()
    expect(scope.es5().testFamilyObjName).toBe(3)
    expect(scope.es5().testObjectThis).toBeDefined()
    expect(scope.es5().testFamilyObjThatDoesNotExist).toBeUndefined()
  })

  test('Regular functions can access the window object', () => {
    expect(scope.es5().testWindow).toBeTruthy()
    expect(scope.es5syntax().testWindow).toBeTruthy()
  })

  test('Regular functions can access the window object', () => {
    expect(scope.es5().testWindowThis).toBeTruthy()
    expect(scope.es5syntax().testWindowThis).toBeTruthy()
  })

  test('Regular functions can access the window object', () => {
    expect(scope.es5().testSomeValue).toBeTruthy()
    expect(scope.es5syntax().testSomeValue).toBeTruthy()
  })

  test('Regular functions can access the window object', () => {
    expect(scope.es5().testOtherValue).toBeTruthy()
    expect(scope.es5syntax().testOtherValue).toBeTruthy()
  })
})

describe('how Object Literals ES6 scopes work', () => {
  test('Arrow functions do not have their own this', () => {
    expect(scope.es6().testThis).toBeFalse()
    expect(scope.es6().testFamilyObjAge).toBeBoolean()
    expect(scope.es6().testFamilyObjName).toBe(3)
    expect(scope.es6().testObjectThis).toBeUndefined()
  })

  test('Regular functions can access the window object', () => {
    expect(scope.es6().testWindow).toBeTruthy()
  })

  test('Regular functions can access the window object', () => {
    expect(scope.es6().testWindowThis).toBeTruthy()
  })

  test('Regular functions can access the window object', () => {
    expect(scope.es6().testSomeValue).toBeFalsy()
  })

  test('Regular functions can access the window object', () => {
    expect(scope.es6().testOtherValue).toBeTruthy()
  })
})
