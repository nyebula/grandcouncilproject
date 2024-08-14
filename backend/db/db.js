const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

const client = new MongoClient(process.env.MONGODB_URI, {
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
}

async function fetchuser(name) {
  try {
    const database = client.db("accounts");
    const users = database.collection("users");
    const query = {'username': name};
    const loginInfo = await users.findOne(query);
    return loginInfo
  } catch (e) {
    console.log(e)
  }
}

async function fetchid(id) {
  try {
    const database = client.db("accounts");
    const users = database.collection("users");
    const query = {'_id': id};
    const loginInfo = await users.findOne(query);
    return loginInfo
  } catch (e) {
    console.log(e)
  }
}


module.exports = {connect, fetchuser, fetchid}