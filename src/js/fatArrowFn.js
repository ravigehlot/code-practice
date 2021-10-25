/**
 * Arrow functions as it sounds is the new syntax => of declaring a
 * function. But it behaves differently from the traditional functions
 * of Javascript.
 *
 * No (this), (arguments), (super) or (new.target) bindings of its own.
 * We cannot use them as (Constructors).
 * They do not have (prototype) property.
 * (yield) keyword cannot be used(Until in special cases).
 * Unique named parameters.
 */

let names = ['prashant', 'golu', 'yadav', 'javascript']

//ES6
export default names.map((e) => {
  return `Hello ${e}`
})
