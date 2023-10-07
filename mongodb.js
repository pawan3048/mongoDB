const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const database = "e-commerce";

async function main() {
  let result = await client.connect();
  console.log("mongoDB successfully connected to Server..");
  let db = result.db(database);
  return db.collection("products");
}
module.exports=main;
