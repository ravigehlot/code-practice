import example from '../src/js/defaultExportOfAVanillaFn'
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

// This is a --default import--
// It only works if example was exported with --default export--
// In this case it does not matter what name you assign to it on import
//  because it will always resolve to whatever the exported default is.

// A module can only have one **default export**, but as -many- named exports
// as you would like.

const mockExpected = 'mock value'

jest.mock('../src/js/defaultExportOfAVanillaFn', () =>
  jest.fn(() => mockExpected)
)

it('returns the expected value', () => {
  const actual = example()

  expect(actual).toEqual(mockExpected)
})
