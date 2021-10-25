// Array destructuring
const foo = ['one', 'two', 'three']
export const [one, two, three] = foo

// Assignment separate from declaration
export let four, five
;[four, five] = [4, 5]

// Returns undefined for nonexistent ones
const bar = ['six', 'seven']
export const [six, seven, eight, nine] = bar

// Default values
export let ten, eleven
;[ten = 10, eleven = 11] = [1]

// Swapping variables
twelve = 12
thirteen = 13

export let [twelve, thirteen] = [thirteen, twelve]

// Parsing an array returned from a function
function f() {
  return [14, 15]
}

export let fourteen, fiftheen
;[fourteen, fiftheen] = f()
