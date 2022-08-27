exports.lambdaHandler = async (event, context) => {
	console.log('event :>>', event)
	console.log('records :>>', event.Records)
	const item = event.Records[0]
	console.log('eventName :>>', item.eventName)
	console.log('data :>>', item.dynamodb)
};
