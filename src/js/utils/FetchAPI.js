class FetchAPI {
  constructor(action) {
    this.action = action
  }

  static getData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((data) => this.action)
  }
}

export default FetchAPI
