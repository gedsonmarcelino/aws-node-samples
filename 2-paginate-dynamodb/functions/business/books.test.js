const { expect } = require("chai");
const { getBooksPaginate } = require("./books")

const mockScan = jest.fn()
jest.mock('aws-sdk', () => {
  const config = { update: jest.fn() };
  const mClient = {
    scan: jest.fn(() => {
      return { promise: mockScan }
    })
  };
  const mDynamoDB = {
    DocumentClient: jest.fn(() => mClient),
  };
  return { config: config, DynamoDB: mDynamoDB };
});

describe('Business: Books', () => {
  it('should return an error', async () => {
    mockScan.mockRejectedValue('error')
    const result = await getBooksPaginate();
    expect(result).to.be.equal("error")
  })

  it('should return a list of books with nextPage', async () => {
    mockScan.mockResolvedValue({
      Items: [1, 2, 3, 4, 5],
      LastEvaluatedKey: '5'
    })

    const result = await getBooksPaginate();

    expect(result).to.be.an("object")
    expect(result.data).to.be.an('array')
    expect(result.nextPage).not.to.be.empty
  })

  it('should return a list of books without nextPage', async () => {
    mockScan.mockResolvedValue({
      Items: [1, 2, 3],
      LastEvaluatedKey: ''
    })

    const result = await getBooksPaginate('5');

    expect(result).to.be.an("object")
    expect(result.data).to.be.an('array')
    expect(result.data).to.have.length(3)
    expect(result.nextPage).to.be.empty
  })
})