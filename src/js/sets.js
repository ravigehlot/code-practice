// ES5
export let set = {}

if (!set.foo) {
  set.foo = true
}

// ES6
// let setEs6 = new Set([iterable])
let setEs6 = new Set()
setEs6.add(25)
setEs6.add('25')

let set2 = new Set([1, 2, 3, 4, 5, 6, 7, 8])
let set3 = new Set('Prashant')
