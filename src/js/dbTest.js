const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dotenv = require('dotenv');

dotenv.config();
// Connection URL
const dbUrl = process.env.DB_URL;
const dbName = process.env.DB_NAME;
const dbCollection = process.env.DB_COLLECTION;
 
// Database Name
const options = { useNewUrlParser: true };
// Use connect method to connect to the server
MongoClient.connect(dbUrl, options, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  console.log("Connected: " + client.isConnected())
  const db = client.db(dbName);
  const col = db.collection(dbCollection);
  col.find().count().then((x)=> {
      console.log("count:" + x);
  });
  col.find().toArray().then((x)=> {
    console.log(x);
    console.log("id: " + x[0].id);
    console.log("description: " + x[0].description);
    console.log("medium: " + x[0].medium);
  });
 
  client.close();
});