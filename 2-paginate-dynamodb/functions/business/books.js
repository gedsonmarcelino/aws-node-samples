const AWS = require('aws-sdk')
const { PAGE_SIZE, REGION, API_VERSION } = require('../config')

AWS.config.update({ region: REGION });

const docClient = new AWS.DynamoDB.DocumentClient({ apiVersion: API_VERSION });

const TABLE_NAME = 'Dev-DdbBooksTable-170OU5VSGVQ8G'

exports.getBooksPaginate = async (startKey = '') => {
  try {
    const params = {
      TableName: TABLE_NAME,
      Limit: PAGE_SIZE
    };

    if (startKey) {
      params['ExclusiveStartKey'] = { id: startKey }
    }

    const result = await docClient.scan(params).promise()
    return {
      data: result.Items,
      nextPage: result.LastEvaluatedKey
    }
  } catch (error) {
    return error
  }

}