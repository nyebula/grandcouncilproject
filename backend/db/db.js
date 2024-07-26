const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require("../config/config.json");
const uri = config.development.MONGODB_URI;

const client = new MongoClient(uri, {
  useUnifiedTopology: true
});

async function connect() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB.");
  }
  catch (error) {
    console.error(error)
  } 
  finally {
    await client.close();
  }
}

module.exports = {connect}