export default function promise(decision, data) {
  return new Promise((resolve, reject) => {
    return resolve({ firstName: 'Eva', lastName: 'Gehlot' })
  })
}
