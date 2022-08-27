const { getResponse, getErrorResponse } = require('./utils/response')
const books = require('./business/books')
let response;

exports.lambdaHandler = async (event, context) => {
	const page = event.queryStringParameters.page || '';
	try {
		const data = await books.getBooksPaginate(page)
		response = getResponse(data)
	} catch (err) {
		response = getErrorResponse(err, 452)
	} finally {
		return response
	}
};
