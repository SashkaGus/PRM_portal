const _ = {
  delay(ms = 1000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, ms)
    })
  },

  isUndefined(d) {
    return typeof d === 'undefined'
  },

  isNull(d) {
    return d === null
  },

  isString(d) {
    return typeof d === 'string'
  },

  isEmpty(d) {
    return d.length && d.length === 0
  },

  params(obj) {
    let params = ''
    Object.keys(obj).forEach(k => {
      params += `${k}=${obj[k]}&`
    })
    return params.substring(0, params.length - 1)
  },

  checkParams(param) {
    const noAlphaNumericCharRegex = /[^a-zA-Z\d\s:]/gi
    return noAlphaNumericCharRegex.test(param) 
  }

}

export { _ }