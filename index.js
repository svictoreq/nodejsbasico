const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Estoy en la ruta /");
});

app.get("/app", (req, res) => {
  res.send("Estoy en la ruta /app");
});

app.get("*", (req, res) => {
  res.send("No sé en dónde estoy");
});

app.listen(3000, () => console.log("Listening on port 3000"));
