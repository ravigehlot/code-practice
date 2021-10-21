const getData = {
  /**
   * When you pass a method to setTimeout(), it will
   * be invoked with a this value that may differ
   * from your expectation. The general issue is
   * explained in detail in the JavaScript reference.
   *
   * @param {*} data
   * @param {*} timeout
   */
  options: {
    timeout: 0,
    data: [],
  },

  promise: setTimeout(function () {
    return new Promise((resolve, reject) => resolve(options.data))
  }, options.timeout),

  init: function () {
    this.primeiro()
    this.segundo()
    this.terceiro()

    return this
  },

  primeiro: function () {
    options = {
      timeout: 5000,
      data: [1, 2, 3],
    }
    return promise
  },

  segundo: function () {
    options = {
      timeout: 1000,
      data: [4, 5, 6],
    }
    return promise
  },

  terceiro: function () {
    options = {
      timeout: 3000,
      data: [7, 8, 9],
    }
    return promise
  },
}.init()

export default getData
