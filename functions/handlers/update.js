const { get } = require("lodash");
const { handlerHO } = require("./_highOrderHandler");

const onHandler = async (event, context) => {
  console.log('event :>> ', JSON.stringify(event, null, 2));
  return {
    message: `Users:Update`,
    id: get(event, "pathParameters", ''),
    body: JSON.parse(get(event, 'body', {}))
  }
};

module.exports = handlerHO(onHandler)