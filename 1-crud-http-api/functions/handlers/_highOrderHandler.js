const { getResponse, getErrorResponse } = require("../utils/response");

exports.handlerHO = (handlerFunction) => (async (event, context) => {
  let response;
  try {
    response = await handlerFunction(event, context)
  } catch (err) {
    console.log(err);
    return getErrorResponse(err.message, err.code);
  }

  return getResponse(response)
})