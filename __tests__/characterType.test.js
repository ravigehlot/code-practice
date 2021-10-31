import characterType from '../src/js/characterType'

describe('Check for whitespaces in a string.', () => {
  // Note: When comparing strings and characters, include() is case-sensitive.
  // Whitespace is any blank spaces and new lines
  test('Verify the count of whitespaces in the string', () => {
    let count = 0

    for (let index = 0; index < characterType.html.length; index += 1) {
      count += characterType.html[index].includes(' ')
    }

    expect(count).toBeGreaterThan(0)
  })
})
