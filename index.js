const AWS = require('aws-sdk');

AWS.config.update({ region: "us-east-1"});

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-10-08"});
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1"});

  const params = {
    TableName: event.tabela
  }
  let retorno
  try {
    const data = await documentClient.scan(params).promise();
    retorno = data
    console.log(retorno);
    
  } catch (err) {
    retorno = err
    console.log(err);
  }
  return { "body": { retorno }}
}
