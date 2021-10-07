const GridBlocks = class {
  constructor(total) {
    this.blockItemClasses = ['bg-gray-300', 'h-12', 'rounded']
    this.total = total
  }

  addBlocks() {
    const grid = document.querySelector('.grid')
    for (let x = 0; x < this.total; x += 1) {
      const block = document.createElement('div')
      block.classList.add(...this.blockItemClasses)
      const newInt = document.createTextNode(x)
      block.appendChild(newInt)
      grid.appendChild(block)
    }
  }
}

export default GridBlocks
