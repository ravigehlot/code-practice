function studyPromise(decision = true, data = {}) {
  const reasonObj = new Error('There is no name to be returned.')

  const promise = new Promise((resolve, reject) => {
    if (decision) resolve(data)

    reject(reasonObj)
  })

  return promise
}

studyPromise().then((fulfilled) => fulfilled)

studyPromise().catch((error) => error.message)

export default studyPromise
