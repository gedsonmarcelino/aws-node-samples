const { handlerHO } = require("./_highOrderHandler");

const onHandler = async (event, context) => {
  console.log('event :>> ', JSON.stringify(event, null, 2));
  return { message: `Users:Read`, }
};

module.exports = handlerHO(onHandler)