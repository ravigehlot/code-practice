// Mocking getValue on the named export is the same as mocking it on the default export
// 🥳 This is one of the few cases where the export type doesn't matter because it's
// an object that can be spied on.

import example from '../src/js/defaultExportOfAnObject'

const mockExpected = 'mock value'

jest.spyOn(example, 'getValue').mockImplementation(jest.fn(() => mockExpected))
it('returns the expected value', () => {
  const actual = example.getValue()

  expect(actual).toEqual(mockExpected)
})
