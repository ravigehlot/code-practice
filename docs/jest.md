## jest

- expect(received).toBe(expected) // Object.is equality

- setupFiles 
    is a list of modules that will be run once before each test file and before the testing framework is installed.

- setupFilesAfterEnv 
    is a list of modules that will be run once before each test file but after the testing framework is installed in the environment.

- it() vs test()
    Both do the same. They exist to offer a familiar way to do the same thing for those coming from other testing frameworks.