const express = require("express");
const fs = require("fs");

const Contenedor = require("../Desafio5/contenedor.js");

const app = express();

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server http listening on port ${PORT}`);
});
server.on("error", (error) => console.error("Error on server", error));

const productos = fs.readFileSync("./productos.txt", "utf-8");
const array = JSON.parse(productos);

app.get("/productos", (req, res) => {
  res.send({ items: array, cantidad: array.length });
});

app.get("/productoRandom", (req, res) => {
  res.send(array[Math.floor(Math.random() * array.length)]);
});
