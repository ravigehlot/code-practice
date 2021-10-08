/**
 * @jest-environment jsdom
 */
import GridBlocks from '../src/js/components/GridBlocks'

const totalNumberofBlocks = 1
const instance = new GridBlocks(totalNumberofBlocks)

test('Object instance is of type GridBlocks', () => {
  expect(instance).toBeInstanceOf(GridBlocks)
})
