import {
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
} from '../src/js/arrayDestructuring'

test('that basic variable assignment variables returns the correct values', () => {
  expect(one).toBe('one')
  expect(two).toBe('two')
  expect(three).toBe('three')
})

test("that a variable can be assigned its value via destructuring, separate from the variable's declaration.", () => {
  expect(four).toBe(4)
  expect(five).toBeInteger()
})

test(`that an array destructuring from an array of length N specified on the right-hand side of the assignment, 
if the number of variables specified on the left-hand side of the assignment is greater than N, only the first 
N variables are assigned values. The values of the remaining variables will be undefined.`, () => {
  expect(six).toBe('six')
  expect(seven).toBeString()
  expect(eight).toBeUndefined()
  expect(nine).toBeUndefined()
})

test('that a variable can be assigned a default, in the case that the value unpacked from the array is undefined.', () => {
  expect(ten).toBe(1)
  expect(eleven).toBe(11)
})

test(`that two variables values can be swapped in one destructuring expression. Without destructuring assignment, 
swapping two values requires a temporary variable (or, in some low-level languages`, () => {
  expect(twelve).toBe(13)
  expect(thirteen).toBe(12)
})
