import Grid from './Grid'
import FetchAPI from '../utils/FetchAPI'

class GridBlocks extends Grid {
  constructor(total) {
    super(Grid, FetchAPI)
    this.blockItemClasses = ['bg-gray-300', 'h-12', 'rounded']
    this.perColumn = total
  }

  addBlocks() {
    const grid = document.querySelector('.grid')
    for (let x = 0; x < this.perColumn; x += 1) {
      const block = document.createElement('div')
      block.classList.add(...this.blockItemClasses)
      FetchAPI.getData({ newInt: document.createTextNode(data.body) })
      block.appendChild(newInt)
      grid.appendChild(block)
    }
  }

  getApiData() {
    return
  }
}

export default GridBlocks
