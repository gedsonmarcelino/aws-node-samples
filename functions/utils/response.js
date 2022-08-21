exports.getResponse = (data, status = 200) => {
  return {
    'statusCode': status,
    'body': {
      code: status,
      data: JSON.stringify(data)
    }
  }
}
exports.getErrorResponse = (title, status = 500, detail = "", errors = [],) => {
  return {
    "status": status,
    "title": title,
    "detail": detail,
    "errors": errors
  }
}