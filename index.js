const express = require("express");
const fs = require("fs");
const cors = require("cors");
const products = require("./db/products");
const categories = require("./db/categories");
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.get("/products", (req, res) => {
  console.log(`request`);
  res.send(products);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  console.log(`product served`);
  const product = products.find((e) => +e.id === +id);
  res.send(product);
});

app.get("/categories", (req, res) => {
  console.log(`categories served`);
  res.send(categories);
});

app.listen(PORT || 3001, () => {
  console.log(`server working on port ${PORT || 3001}`);
});
