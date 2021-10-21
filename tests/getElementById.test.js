describe('getElementById', () => {
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

    dataParentTest = document.getElementById('parentTest')
    dataChildTest = document.getElementById('childTest')
  })

  test('Verify that getElementById of nonexisting element returns null.', () => {
    expect(dataChildTest).toBeNull() // no specific methods
  })

  test('Verify that querySelector inherits from multiple classes.', () => {
    expect(dataParentTest).toBeInstanceOf(HTMLDivElement) // no specific methods
    expect(dataParentTest).toBeInstanceOf(HTMLElement)

    // Does not inherit Element, it returns an Element instead.
    expect(dataParentTest).toBeInstanceOf(Element)
    // Element inherits from Node
    expect(dataParentTest).toBeInstanceOf(Node)
    // Node inherits from EventTarget
    expect(dataParentTest).toBeInstanceOf(EventTarget)
  })

  test('Verify that boths nodeName and tagName returns div.', () => {
    // tagName inherits from nodeName
    // the element is really a node
    const [tagName, nodeName] = [
      dataParentTest.tagName,
      dataParentTest.nodeName,
    ]

    expect(nodeName).toBe(tagName)
  })

  test('Element: Verify that childElementCount returns 1.', () => {
    // childElementCount property from Element
    const countElem = dataParentTest.childElementCount

    expect(countElem).toBe(1)
  })

  test('Node: Verify that getElementById childNodes returns 3.', () => {
    // childElementCount property from Element
    const countElem = dataParentTest.childNodes.length

    expect(countElem).toBe(3)
  })

  test('Node: Verify that querySelector returns a matching string.', () => {
    dataParentTest.innerHTML = dataParentTest.childNodes.item(2)
    const outerElem = dataParentTest.outerHTML

    expect(typeof outerElem).toBe('string')
  })
})
