import studyPromise from '../src/js/utils/Promise'

const names = {
  firstName: 'Ravi',
  lastName: 'Gehlot',
}

const errorMsg = 'There is no name to be returned.'
const errorObj = new Error(errorMsg)

test('async test .resolves returns the names object.', async () => {
  jest.fn().mockImplementation(() => Promise.resolve(names))
  jest.fn().mockResolvedValue(names)

  await expect(studyPromise(true, names)).resolves.toStrictEqual(names)
})

test('async test .resolves returns an object (the data passed)', async () => {
  jest.fn().mockImplementation(() => Promise.resolve(names))
  jest.fn().mockResolvedValue(names)

  await expect(typeof studyPromise(true, names)).toBe('object')
})

test('async test that .rejects returns an Error object.', async () => {
  expect.assertions(2)

  jest.fn().mockImplementation(() => Promise.reject(errorObj))
  jest.fn().mockResolvedValue(errorMsg)

  await studyPromise(false, names).catch((e) => expect(e).toEqual(errorObj))

  await studyPromise(false, names).catch((e) =>
    expect(e.message).toEqual(errorMsg)
  )
})

test('async test rejects returns an Error object', async () => {
  expect.assertions(1)

  jest.fn().mockImplementation(() => Promise.reject(errorObj))
  jest.fn().mockResolvedValue(errorObj)

  await studyPromise(false, names).catch((e) => expect(e).toBeInstanceOf(Error))
})
