const express = require("express");
const fs = require("fs");
const cors = require("cors");
const products = require("./db/products");
const categories = require("./db/categories");
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.get("/products", (req, res) => {
  fs.readFile("./db/products.js", (err, data) => {
    if (err) {
      console.log(`something went wrong`);
    }
    console.log(products);
    res.send({ products });
  });
});
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const product = products.filter((e) => +e.id === +id);
  res.send(product);
});
app.get("/categories", (req, res) => {
  console.log(categories);
  res.send(categories);
});

app.listen(PORT || 3001, () => {
  console.log(`server working on port ${PORT || 3001}`);
});
