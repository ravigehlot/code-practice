## Javascript

- JavaScript is the language.
- JavaScript is based on the standard called ECMAScript.
- ECMAScript can be abbreviated to ES
- An Element object is a specific type of Node.
- A Node object is more generic. It can be an Element like <this>all of this</this>

- Promises
    One of the fundamental principles behind a promise is that it's handled asynchronously. This means that you cannot create a promise and then immediately use its result synchronously in your code (e.g. it's not possible to return the result of a promise from within the function that initiated the promise).

    What you likely want to do instead is to return the entire promise itself. Then whatever function needs its result can call .then() on the promise, and the result will be there when the promise has been resolved.

    A Promise is an object representing the eventual completion or failure of an asynchronous operation.

    A Promise may be in one of the following states:

    pending
    fulfilled
    rejected

    One of the most widely used examples of asynchronous operations in Javascript is a Fetch API. The fetch() method returns a Promise.