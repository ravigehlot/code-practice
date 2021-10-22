/**
 * In our first example, the library exports is a single default function.
 * When this function is called, it executes the library's logic.
 *
 * To mock its implementation, we use a default import, mock the module,
 * and provide a factory (a function which will run when the module is invoked).
 *
 * Because the module is a function, we provide a factory that returns the
 * mock function we want to be invoked instead of the module. In this example,
 * we provided a mock implementation so we could set the return value.
 */
import example from '../src/js/defaultExportVanillaFn'

const mockExpected = 'mock value'

jest.mock('../src/js/defaultExportVanillaFn', () => jest.fn(() => mockExpected))

it('returns the expected value', () => {
  const actual = example()
  expect(actual).toEqual(mockExpected)
})
