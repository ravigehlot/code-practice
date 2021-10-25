// a default object that has a property for the function we want to mock
// Because example is an object, we can spy on its properties.
// If we didn't want to mock the implementation, we could leave that
// part off and still be able to track that the returned mock function was called.

// * Note: jest.spyOn invokes the function's original implementation which is useful
// for tracking that something expected happened without changing its behavior.
// For true mocking, we use mockImplementation to provide the mock function
// to overwrite the original implementation.
export default {
  getValue: () => 'real value',
}
