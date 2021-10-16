import GridBlocks from '../src/js/components/GridBlocks'

const totalNumberofBlocks = 2
const instance = new GridBlocks(totalNumberofBlocks)

test('Object instance is of type GridBlocks', () => {
  expect(instance).toBeInstanceOf(GridBlocks)
})

test('Check if addBlocks adds blocks to the DOM.', () => {
  document.body.innerHTML = `
  <div class="p-8">
    <div class="grid grid-cols-3 gap-4"></div>
  </div>
  `
  instance.addBlocks()

  const data = [
    '<div class="bg-gray-300 h-12 rounded">0</div>',
    '<div class="bg-gray-300 h-12 rounded">1</div>',
  ]

  data.forEach((block) => {
    const grid = document.body.getElementsByClassName('grid')

    expect(grid.innerHTML).toBe(block.result)
  })
})
