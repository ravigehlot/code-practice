export default function promise(decision, data) {
  const reasonObj = Error('There is no name to be returned.')

  //return new Promise((resolve, reject) => {
  //if (decision) resolve(data)
  //return resolve(data)
  //reject(reasonObj)
  //})
  return new Promise((resolve, reject) => resolve(data))
}
