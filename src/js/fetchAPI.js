let fetchAPI = () => {
  const headers = [
    ['Host', process.env.CITYOFNEWYORKUS_HOST],
    ['Accept', process.env.CITYOFNETYORKUS_MIMETYPE],
    ['X-App-Token', process.env.CITYOFNEWYORKUS_APIKEY_ID],
  ]

  let promiseFetchAPI = fetch('/resource/6khm-nrue.json', {
    method: 'GET',
    headers,
  })
    .then((response) => response.json())
    .then((data) => workOnData(data))
    .catch((error) => handleError(error))

  return promiseFetchAPI
}

let workOnData = (data) => {
  console.log(data)
}

let handleError = (error) => {
  console.log(error)
}

fetchAPI()
// export default fetchAPI
