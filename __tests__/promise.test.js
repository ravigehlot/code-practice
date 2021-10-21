// Manual Mock
import getData from '../src/js/utils/Promise'

describe('verify that mock works', () => {
  /*test('calls mock after the real implementation is called', async () => {
    const mockPromise = jest
      .spyOn(getData, 'promise')
      .mockImplementation(() => Promise.resolve({ firstName: 'Eva' }))
    const promise = getData.promise({ firstName: 'Ravi' })
    expect(mockPromise).toBeCalled()
    expect(mockPromise).toHaveBeenCalledOnce()
    expect(mockPromise).toHaveBeenCalledWith(names.data)
  })*/

  /*test('calls mock after the real implementation is called', async () => {
    const mockPromise = jest
      .spyOn(getData, 'promise')
      .mockImplementation(() => Promise.resolve({ firstName: 'Eva' }))
    const promise = getData.promise({ firstName: 'Ravi' })
    expect(await promise).toBe(Promise)
  })*/

  test('calls mock after the real implementation is called', async () => {
    const mockPromise = jest.spyOn(getData, 'promise')

    const promise = getData()
    expect(await promise).toBe(Promise)
  })
})
