const chai = require('chai');
const { getResponse, getErrorResponse } = require('./response');

const expect = chai.expect

describe('response.js', () => {
  describe('getResponse:', () => {
    it('should get response success 200', () => {
      const result = getResponse({ data: 'test' }, 200);
      expect(result.statusCode).to.be.equal(200)
    })

    it('should get response success 201', () => {
      const result = getResponse({ data: 'test' });
      expect(result.statusCode).to.be.equal(200)
    })
  })

  describe('getErrorResponse', () => {
    it('should return an error response 452', () => {
      const result = getErrorResponse({ message: 'error' }, 452)
      expect(result.statusCode).to.be.equal(452)
    })

    it('should return an error response 500', () => {
      const result = getErrorResponse({ message: 'error' })
      expect(result.statusCode).to.be.equal(500)
    })
  })
})