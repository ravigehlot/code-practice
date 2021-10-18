/**
 * Write your own matchers expect.extend()
 */
expect.extend({
  toBeSwitchedOn(data) {
    if (data) {
      return {
        message: () => 'Yes.',
        pass: true,
      }
    }

    return {
      message: () => 'No.',
      pass: false,
    }
  },
})

test('verify that extended expect works', () => {
  // toBeSwitchedOn is a jest matcher
  expect(true).toBeSwitchedOn('Yes.')
})

test('jest-extended matcher toBeEmpty()', () => {
  expect([]).toBeEmpty()
})
