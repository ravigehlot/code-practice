describe('Check for whitespaces in a string.', () => {
  const data = {
    html: `<div class="parentTest">
                <div class="childTest">
                Test 1
                </div>
            </div>
            <div class="parentTest">
                <div class="childTest">
                Test 2
                </div>
            </div>`,
  }

  // Note: When comparing strings and characters, include() is case-sensitive.
  // Whitespace is any blank spaces and new lines
  test('Verify the count of whitespaces in the string', () => {
    let count = 0

    for (let index = 0; index < data.html.length; index += 1) {
      count += data.html[index].includes(' ')
    }

    expect(count).toBeGreaterThan(0)
  })
})
