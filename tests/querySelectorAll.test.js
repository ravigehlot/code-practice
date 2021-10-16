describe('querySelectorAll', () => {
  let data
  let dataParentTest
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

    dataParentTest = document.body.querySelectorAll('.parentTest')
    dataChildTest = document.body.querySelectorAll('.childTest')
  })

  test('Verify that querySelectorAll returns an instance of Element.', () => {
    // NodeList objects are collections of nodes.
    expect(dataChildTest).toBeInstanceOf(NodeList)
  })

  test('Verify that the NodeList returns a count of three nodes.', () => {
    const nodeString = dataChildTest.item(1)
    const newNodes = nodeString.cloneNode(false)
    const firstParentTest = dataParentTest.item(0) // Element
    firstParentTest.appendChild(newNodes)
    dataChildTest = document.body.querySelectorAll('.childTest')
    const countElem = dataChildTest.length

    // NodeList objects are collections of nodes.
    expect(countElem).toBe(3)
  })

  test('Verify that calling item(1) on the NodeList returns an instance of Element.', () => {
    const nodeString = dataChildTest.item(1)

    // NodeList objects are collections of nodes.
    expect(nodeString).toBeInstanceOf(Element)
  })
})
