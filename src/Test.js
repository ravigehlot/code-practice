let Test = class {
  bar = 'foo'
  static me = 'Ravi'

  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  buildFullName() {
    this.fullName = `${this.firstName} ${this.lastName}`
  }

  getFullName() {
    return this.fullName
  }
}

export default Test
