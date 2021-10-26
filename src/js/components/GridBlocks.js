import grid from './grid'

class gridBlocks extends Grid {
  constructor(total) {
    super(grid)
    this.blockItemClasses = ['bg-gray-300', 'h-12', 'rounded']
    this.perColumn = total
  }

  addBlocks() {
    const grid = document.querySelector('.grid')
    for (let x = 0; x < this.perColumn; x += 1) {
      const block = document.createElement('div')
      block.classList.add(...this.blockItemClasses)
      const newInt = document.createTextNode(x)
      block.appendChild(newInt)
      grid.appendChild(block)
    }
  }
}

export default gridBlocks
