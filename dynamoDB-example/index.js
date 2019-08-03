// We'll need the AWS SDK for the DynamoDB Document Client to make our lives easier
const AWS = require('aws-sdk');

// Create a DynamoDB Document Client Object which contains methods we can use
const documentClient = new AWS.DynamoDB.DocumentClient({region: 'ap-southeast-2'});

// Parameters to put
var params = {
  TableName: 'DynamoExample',   // Table Name in DynamoDB (Required - Key)
  Item: {                       // Item in that Table (Required - Key)
    Data: 4,
    message: "Test"
  },
}

// Lambda code to run
exports.handler = function(event, context) {
  documentClient.put(params, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
  });
}
