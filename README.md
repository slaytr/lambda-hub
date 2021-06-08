<div style="text-align: center;"">
  <img src="assets/aws-lambda.svg" />
</div>

## Repository for Learning Artifacts

This repository contains small scripts or programs used to interact with AWS services, mainly dealing with AWS lambda related services.


#### Last update: 03-08-2019

##### List of Directories

* `intro/` | Introduction to AWS CLI
* `dynamoDB-example/` | DynamoDB example


`dynamoDB-example/index.js`
```
// We'll need the AWS SDK for the DynamoDB Document Client to make our lives easier
const AWS = require('aws-sdk');

// Create a DynamoDB Document Client Object which contains methods we can use
const documentClient = new AWS.DynamoDB.DocumentClient({region: 'ap-southeast-2'});

// Parameters to put
var params = {
  TableName: 'DynamoExample',   // Table Name in DynamoDB (Required Key of Params)  Fixed Name
  Item: {                       // Item in that Table (Required Key of Params)      Fixed Name
    Data: 4,                    // Primary Key of Item (Required Key of Item)
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

```
