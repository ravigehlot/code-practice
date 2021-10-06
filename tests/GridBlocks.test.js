/**
 * @jest-environment jsdom
 */
import GridBlocks from '../src/js/components/GridBlocks'

let totalNumberofBlocks = 9
let instance = new GridBlocks(totalNumberofBlocks)

test('Object instance is of type GridBlocks', () => {
  expect(instance).toBeInstanceOf(GridBlocks)
})

test('GridBlocks method addBlocks add blocks', () => {})
