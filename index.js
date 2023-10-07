const mongoose = require("mongoose");
const collection = "products";

main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");
  const ProductsSchema = await new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
  });
  const ProductModel = mongoose.model(collection, ProductsSchema);
  let data = new ProductModel({
    name: "Orange",
    price: "452",
    category: "Fruit",
  });
  let result = await data.save();
  console.log(result);
};
main();
