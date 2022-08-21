const { get } = require('lodash')
exports.getHttpMethod = (event) => {
  return get(event, 'requestContext.http.method', null)
}

exports.getPathParameters = (event) => {
  return get(event, 'pathParameters', null)
}