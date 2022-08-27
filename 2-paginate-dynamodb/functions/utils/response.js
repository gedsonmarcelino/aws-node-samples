exports.getResponse = (data, status = 200) => {
  return {
    statusCode: status,
    body: JSON.stringify(data)
  }
}

exports.getErrorResponse = (errors, status = 500) => {
  return this.getResponse(errors, status)
}