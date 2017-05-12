/**
 * API Service
 */

class Api {
  /* Simple GET Request with no Options */
  get(uri, config) {
    return axios(uri, config)
  }

  post(uri, data) {
    return axios.post(uri, data)
  }
}

module.exports = Api
