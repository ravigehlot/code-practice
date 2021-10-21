## jest

- expect(received).toBe(expected) // Object.is equality

- setupFiles 
    is a list of modules that will be run once before each test file and before the testing framework is installed.

- setupFilesAfterEnv 
    is a list of modules that will be run once before each test file but after the testing framework is installed in the environment.

- window object
    window is the object of browser, it is not the object of javascript. The javascript objects are string, array, date etc.
    windows is known as the global object in a browser
    it can also be treater as the DOM root
    window = browser.

        - window
            is the actual global object.

        - window.document
            is where the DOM is.

        - window.screen
            it contains properties about the user's display.

        - window.navigator
            it is used for browser detection.

- document
    HTML
    document gets loaded into window object

- window.document
     browser + HTML
- it() vs test()
    Both do the same. They exist to offer a familiar way to do the same thing for those coming from other testing frameworks.
