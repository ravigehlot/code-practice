function sum(a, b) {
  return a + b
}

function addOne(items) {
  return items.map((val, index, arr) => {
    val + 1
  })
}

export { sum, addOne }
