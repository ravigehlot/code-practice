describe('querySelector', () => {
  let data
  let dataChildTest

  beforeEach(() => {
    data = {
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

    document.body.innerHTML = data.html

    dataChildTest = document.body.querySelector('.childTest')
  })

  test('Verify that querySelector inherits from multiple classes.', () => {
    expect(dataChildTest).toBeInstanceOf(HTMLDivElement) // no specific methods
    expect(dataChildTest).toBeInstanceOf(HTMLElement)
    expect(dataChildTest).toBeInstanceOf(Element) // Element.childElementCount
    expect(dataChildTest).toBeInstanceOf(Node)
    expect(dataChildTest).toBeInstanceOf(EventTarget)
  })

  test('Verify that boths nodeName and tagName returns div.', () => {
    // tagName inherits from nodeName
    // the element is really a node
    const [tagName, nodeName] = [dataChildTest.tagName, dataChildTest.nodeName]

    expect(nodeName).toBe(tagName)
  })

  test('Verify that querySelector returns a count of zero.', () => {
    // childElementCount property from Element
    const countElem = dataChildTest.childElementCount

    expect(countElem).toBe(0)
  })

  test('Verify that querySelector returns a matching string.', () => {
    dataChildTest.innerHTML = dataChildTest.innerHTML.trim()
    const outerElem = dataChildTest.outerHTML

    expect(typeof outerElem).toBe('string')
    expect(outerElem).toBe('<div class="childTest">Test 1</div>')
  })
})
