const express = require("express");
const router = require("./routes")

const app = express();

// aktifin parsing json
app.use(express.json());
// aktifin urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(router)

module.exports = app;