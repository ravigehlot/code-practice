import studyPromise from '../src/js/utils/Promise'

const names = {
  firstName: 'Ravi',
  lastName: 'Gehlot',
}

const errorObj = new Error('There is no name to be returned.')

// Mocks
const mockPromise = jest
  .fn()
  .mockImplementation(() => Promise.resolve())
  .mockResolvedValue()
  .mockImplementation(() => Promise.reject())
  .mockName('promise')

describe('verify if called, returned value', () => {
  it('calls Promise.resolve once', async () => {
    try {
      await mockPromise()
    } catch (error) {
      // ignore error
    } finally {
      expect.assertions(3)

      expect(mockPromise).toBeCalled()
      expect(mockPromise).toBeCalledTimes(1)
      expect(mockPromise).toHaveBeenCalledOnce()
    }
  })

  it('returns a value on .then()', async () => {
    try {
      //await mockPromise()
    } catch (error) {
      // ignore error
    } finally {
      expect.assertions(2)
      expect(mockPromise).toBeCalled()
      expect(studyPromise(true, names)).resolves.toBe(names)
    }
  })
})

// Promise.resolve()
describe('verify promise resolve', () => {
  test('that async .resolves() returns the names object.', async () => {
    try {
    } catch (error) {
    } finally {
      expect.assertions(1)

      expect(await studyPromise(true, names)).resolves.toStrictEqual(names)
    }
  })

  test('that async .resolves() returns an object (the data passed)', async () => {
    expect.assertions(1)

    await expect(typeof studyPromise(true, names)).toBe('object')
  })
})

// Promise.reject()
describe('verify promise reject', () => {
  mockFn(errorObj, errorMsg)
  test('async test that .rejects returns an Error object.', async () => {
    expect.assertions(2)

    await studyPromise(false, names).catch((e) => expect(e).toEqual(errorObj))

    await studyPromise(false, names).catch((e) =>
      expect(e.message).toEqual(errorMsg)
    )
  })

  test('async test rejects returns an Error object', async () => {
    expect.assertions(1)

    await studyPromise(false, names).catch((e) =>
      expect(e).toBeInstanceOf(Error)
    )
  })
})
