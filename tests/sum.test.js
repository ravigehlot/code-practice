import { sum, addOne } from '../src/sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('adds 1 to every iterated item', () => {
  expect(addOne([1, 2, 3, 4])).toBe([2, 3, 4, 5])
})
