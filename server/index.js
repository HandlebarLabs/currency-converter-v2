const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data");

const app = express();
app.use(bodyParser.json());

const WARNING =
  "This API is purely for educational purposes. The data returned is not accurate.";

app.get("/", (req, res) => {
  res.status(200).json({
    message: WARNING
  });
});

app.get("/latest", (req, res) => {
  const base = (req.query.base || "EUR").toUpperCase();
  const rates = data.rates[base] || {};
  const hasRates = Object.keys(rates).length > 0;

  res.status(200).json({
    message: WARNING,
    base,
    rates,
    date: new Date(),
    error: hasRates ? null : "Invalid base."
  });
});

app.listen(3000, () => {
  console.log("App running on http://localhost:3000");
});
