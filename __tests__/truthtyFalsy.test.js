import truthyFalsy from '../src/js/truthtyFalsy'

describe('how to work with truthtyFalsy value', () => {
  test('is false, true?, no, is true false?, false', () => {
    expect(truthyFalsy.valFalse()).toBeFalsy()
  })

  test('is true, false?, no, is false false?, true.', () => {
    expect(truthyFalsy.valTrue()).toBeTruthy()
  })

  test('is null, false?, yes, is true false?, false.', () => {
    expect(truthyFalsy.valNull()).toBeFalsy()
  })

  test('is undefined, false?, yes, is true false?, false.', () => {
    expect(truthyFalsy.valUndefined()).toBeFalsy()
  })

  test('is zero, false?, yes, is true false?, false.', () => {
    expect(truthyFalsy.valZero()).toBeFalsy()
  })

  test('is zeroNegative, false?, yes, is true false?, false.', () => {
    expect(truthyFalsy.valZeroNegative()).toBeFalsy()
  })

  test('is one, false?, no, is false false?, true.', () => {
    expect(truthyFalsy.valOne()).toBeTruthy()
  })

  test('is MinusFive, false?, no, is false false?, true.', () => {
    expect(truthyFalsy.valMinusFive()).toBeTruthy()
  })

  test('is NaN, false?, yes, is true false?, false.', () => {
    expect(truthyFalsy.valNaN()).toBeFalsy()
  })

  test('is empty string, false?, yes, is true false?, false.', () => {
    expect(truthyFalsy.valEmpty()).toBeFalsy()
  })

  test('is the hello string, false?, no, is false false?, true.', () => {
    expect(truthyFalsy.valString()).toBeTruthy()
  })
})
