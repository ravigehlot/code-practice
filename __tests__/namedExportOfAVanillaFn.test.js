// This is a **named import**
// It only works if the export contains a **named export**
// In this case the name matters because you are importing a specific
//  thing by its **export name**.
import { example } from '../src/js/namedExportOfAVanillaFn'

const mockExpected = 'mock value'

jest.mock('../src/js/namedExportOfAVanillaFn', () => ({
  example: jest.fn(() => mockExpected),
}))
it('returns the expected value', () => {
  const actual = example()

  expect(actual).toEqual(mockExpected)
})
