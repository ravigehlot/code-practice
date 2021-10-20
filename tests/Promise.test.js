// __tests__/user-test.js
jest.mock('./mocks/promise')

import getPromise from '../src/js/promise'

// The assertion for a promise must be returned.
it('works with promises', () => {
  expect.assertions(1)
  return getPromise(true, {}).then((data) => expect(data).toEqual({}))
})
