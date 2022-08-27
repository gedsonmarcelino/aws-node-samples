const { lambdaHandler } = require('./functions/app');
const event = require('./events/event.json');

(async () => {
  const response = await lambdaHandler(event);
  console.log('Status :>> ', response.statusCode);
  console.log('Body :>> ', JSON.stringify(response.body, null, 2));
})()