import RestConnection from './rest'

class BaseAPI {
  constructor () {}

  initAdapter (conf) {
    if (!conf) throw new Error('api config required')
    return new RestConnection(conf)
  }

  handleError (err, res) {
    if (err) {
      return err
    } else if (res.result.status && res.result.status.code !== 'success') {
      return res.result.status
    }
    return null
  }

  handleWPError () {
    return null
  }

  apiError (code, msg, data) {
    const error = new Error(code)
    error.code = code
    error.msg = msg
    error.data = data
    return error
  }

  getApiUrl (url, params) {
    if (params) {
      let paramUrl = Object.keys(params).map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&')
      url += `?` + paramUrl
    }
    return url
  }
}

export default BaseAPI
