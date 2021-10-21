describe('getElementsByClassName', () => {
  let data
  let dataParentTest
  let dataChildTest

  beforeEach(() => {
    data = {
      html: `<div id="parentTest">
                <div class="childTest">
                Test 1
                </div>
            </div>`,
    }

    document.body.innerHTML = data.html

    dataParentTest = document.getElementsByClassName('parentTest')
    dataChildTest = document.getElementsByClassName('childTest')
  })

  test('Verify that getElementsByClassName of nonexisting element returns an empty array.', () => {
    expect(dataParentTest).toEqual(expect.arrayContaining([]))
  })

  test('Verify that querySelector inherits from multiple classes.', () => {
    expect(dataChildTest).toBeInstanceOf(HTMLCollection)
  })
})
