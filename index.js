const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/order.routes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/ordersdb")
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error("Erro ao conectar no Mongo:", err));

app.use("/", routes);

app.listen(3000, () => {
  console.log("API rodando em http://localhost:3000");
});
