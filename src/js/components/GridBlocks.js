let GridBlocks = class {
  blockItemClasses = ['bg-gray-300', 'h-12', 'rounded']

  constructor(total) {
    this.total = total
  }

  addBlocks() {
    const grid = document.querySelector('.grid')
    for (let x = 0; x < this.total; x++) {
      let block = document.createElement('div')
      block.classList.add(...this.blockItemClasses)
      let newInt = document.createTextNode(x)
      block.appendChild(newInt)
      grid.appendChild(block)
    }
  }
}

export default GridBlocks
