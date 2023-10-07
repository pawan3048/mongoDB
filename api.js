const express = require("express");
const app = express();
const mongodb = require("mongodb");
const MongoDB = require("./mongodb");

app.get("/", async (req, resp) => {
  let data = await MongoDB();
  data = await data.find({}).toArray();
  resp.send(data);
});

app.use(express.json()); // use for post & put data from Postman
app.post("/", async (req, resp) => {
  let data = await MongoDB();
  data = await data.insertOne(req.body);
  resp.send(data);
}); // insert data from Postman To MongoDB..

app.put("/", async (req, resp) => {
  console.log(req.body);
  let data = await MongoDB();
  data = await data.updateOne({ name: req.body.name }, { $set: req.body });
  resp.send({ data: "updated" });
});

app.delete("/:id", async (req, resp) => {
  console.log(req.params.id);
  let data = await MongoDB();
  data = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
  resp.send(data);
});

app.listen(8500);
