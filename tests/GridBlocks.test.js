/**
 * @jest-environment jsdom
 */
import GridBlocks from '../src/js/components/GridBlocks'

const totalNumberofBlocks = 1
const instance = new GridBlocks(totalNumberofBlocks)

test('Object instance is of type GridBlocks', () => {
  expect(instance).toBeInstanceOf(GridBlocks)
})

test('GridBlocks method addBlocks add blocks', () => {
  document.body.innerHTML = `
  <div class="grid grid-cols-3 gap-4">
    <div class="bg-gray-300 h-12 rounded"></div>
  </div>`

  console.log(document.body.innnerHTML)

  instance.addBlocks()
})
