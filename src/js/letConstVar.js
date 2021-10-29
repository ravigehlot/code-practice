// Scope with an Object Literal
var that = this

let verifyScope = {
  // ES6
  es6: () => {
    return this === that
  },
  // ES5
  es5: function () {
    return this !== that
  },
}

export default verifyScope
