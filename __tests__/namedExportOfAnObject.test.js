import { example } from '../src/js/namedExportOfAnObject'

const mockExpected = 'mock value'

jest.spyOn(example, 'getValue').mockImplementation(jest.fn(() => mockExpected))

it('returns the expected value', () => {
  const actual = example.getValue()

  expect(actual).toEqual(mockExpected)
})
