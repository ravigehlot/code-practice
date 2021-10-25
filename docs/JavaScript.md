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
- Convention
    Double __ underscore in front of a variable is a convention. It is used for global variable.
    Single _ underscore in front of a variable is to denotate a private variable.

- named export vs default export
  - Default export
    - one default per file, must provide a name and it can be anything you like
    - export const is a named export that exports a const declaration
  
  - Names export
    - you can have multiple named exports per file
    - then import the specific imports you want in braces
  
  - Namespace import
    - you can import everything on the file.
    - import * from './something'

- Asynchronous 
  It can be thought as non-blocking, able to start another task while the current one is
  completing. 

- Promises
    Goal: not block the main thread.

  In ES5, there are no Promises. The way to do asynchronous in ES5 is to use callbacks within
  a function. You would pass a callback that would be called when the function completed
  the work it was doing. If you needed to wait on another function, you would have to call
  yet another callback creating what is known to be a callback hell.

  jQuery introducted its own type of Promises with Deferred Objects. Deferred did not comply
  with other standard implementations but it did the job. It would placed the callbacks
  on a queue for execution creating the Promise effect.

  In ES6, Promises were introduced greatly facilitating asynchronous calls with fetch() returning
  a Promise. .then() returning a Response and .catch returning an Error object.
    Promises can have three states: Pending, Fullfiled, or Rejected.

    fetch() will call Promise.resolve() to return a Promise.

    If you use the async keyword before a function definition, you can then use await within the function. When you await a promise, the function is paused in a non-blocking way until the promise settles. If the promise fulfills, you get the value back. If the promise rejects, the rejected value is thrown.

    async function myFirstAsyncFunction() {
        try {
            const fulfilledValue = await promise;
        }
        catch (rejectedValue) {
            // …
        }
    }

  The syntax for Promises:
    // promise syntax look like this
      // new Promise(function (resolve, reject) { ... } );

  In ES7, async and await were introduced as syntactic sugar for Promises in ES6.

  Resource: 
  - https://www.digitalocean.com/community/tutorials/understanding-javascript-promises
  - https://learnersbucket.com/tutorials/es6/fat-arrow-function/
  - https://mercedesbernard.com/blog/jest-mocking-strategies
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
