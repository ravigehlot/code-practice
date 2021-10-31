// Casting TruthyFalsy values to true or false
// ! is the logical negation or "not" operator. !! is !

let truthyFalsy = {
  valFalse: () => !!false, // is false, true?, no, is true false?, false.
  valTrue: () => !!true, // is true, false?, no, is false false?, true.
  valNull: () => !!null, // is null, false?, yes, is true false?, false.
  valUndefined: () => !!undefined,
  valZero: () => !!0,
  valZeroNegative: () => !!-0,
  valOne: () => !!1,
  valMinusFive: () => !!-5,
  valNaN: () => !!NaN,
  valEmpty: () => !!'',
  valString: () => !!'hello',
}

export default truthyFalsy
