import promise from './utils/promise'

export default function getPromise(decision, data) {
  return promise(decision, data).then((data) => data)
}
