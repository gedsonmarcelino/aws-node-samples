'use strict';

const app = require('./app.js');
const chai = require('chai');
const expect = chai.expect;
const books = require('./business/books')

const mockEvent = {
	queryStringParameters: {
		page: ''
	}
}
const mockContext = {};

describe('App.lambdaHandler:', function () {
	it('should return success', async () => {
		jest.spyOn(books, 'getBooksPaginate').mockResolvedValue({
			data: [1, 2, 3, 4, 5],
			nextPage: 1
		})

		const result = await app.lambdaHandler(mockEvent, mockContext)

		expect(result).to.be.an('object');
		expect(result.statusCode).to.equal(200);
		expect(result.body).to.be.an('string');

		let response = JSON.parse(result.body);

		expect(response).to.be.an('object');
		expect(response.data).to.be.an('array');
		expect(response.data).to.have.length(5)
	});

	it('should return an error', async () => {
		jest.spyOn(books, 'getBooksPaginate').mockRejectedValue('error')
		const result = await app.lambdaHandler(mockEvent, mockContext)

		expect(result).to.be.an('object');
		expect(result.statusCode).to.equal(452);
		expect(result.body).to.be.an('string');

		let response = JSON.parse(result.body);

		expect(response).to.be.equal('error');
	});
});
