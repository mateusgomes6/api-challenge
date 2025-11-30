const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/order.routes");

const app = express();
app.use(cors());
app.use(express.json());