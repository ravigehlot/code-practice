import * as exampleModule from '../src/js/namedExportOfAFnThatReturnsAnObject'

const mockExpected = 'mock value'

jest.spyOn(exampleModule, 'example').mockImplementation(() => ({
  getValue: jest.fn(() => mockExpected),
}))
it('returns the expected value', () => {
  const { getValue } = exampleModule.example()

  const actual = getValue()

  expect(actual).toEqual(mockExpected)
})
