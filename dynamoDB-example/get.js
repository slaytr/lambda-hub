// We'll need the AWS SDK for the DynamoDB Document Client to make our lives easier
const AWS = require('aws-sdk');

// Create a DynamoDB Document Client Object which contains methods we can use
const documentClient = new AWS.DynamoDB.DocumentClient({region: 'ap-southeast-2'});

// Parameters to scan
let parameters = {
  TableName: 'DynamoExample',
  Limit: 100
}

// Parameters to get
// let parameters = {
//   TableName: 'DynamoExample',
//   Key: {
//     "message" : "hello"
//   }
// }

// Lambda code to run
exports.handler = function(event, context) {

  documentClient.scan(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  });


}
