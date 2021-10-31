window.otherValue = 'otherValue'

window.family = {
  first: ['Ravi Gehlot', 40, '07/04/1981'],
  2: ['Allison Gehlot', 39, '04/30/1982'],
  obj: { name: ['Eva Gehlot', 8, '02/01/2013'] },
}

// Scope with an Object Literal
let verifyScope = {
  someValue: 'someValue',

  // ES5
  es5: function () {
    return {
      // Arrow functions do not have their own this
      testThis: this,
      testWindow: window,
      testWindowThis: this !== window,
      testSomeValue: this.someValue,
      testOtherValue: window.otherValue && otherValue,
      testFamilyObjAge: family.first[1] == 40,
      testFamilyObjName: family['2'].length,
      testObjectThis: this,
      testFamilyObjThatDoesNotExist: family.nowhere,
    }
  },
  es5syntax() {
    return {
      // Arrow functions do not have their own this
      testThis: !!this,
      testWindow: window,
      testWindowThis: this !== window,
      testSomeValue: this.someValue,
      testOtherValue: window.otherValue && otherValue,
      testFamilyObjAge: family.first[1] == 40,
      testFamilyObjName: family['2'].length,
    }
  },
  // ES6
  es6: () => {
    return {
      // Arrow functions do not have their own this
      testThis: !!this,
      testWindow: window,
      testWindowThis: this !== window,
      // cannot testSomeValue
      testOtherValue: window.otherValue && otherValue,
      testFamilyObjAge: family.first[1] == 40,
      testFamilyObjName: family['2'].length,
      testObjectThis: this,
    }
  },
}

export default verifyScope
