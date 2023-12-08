const express = require("express");
const cors = require("cors");

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  const mes = "Hello World";
  res.json(mes);
});

app.listen(port, () => {
  console.log(`SERVER Running at ${port}`);
});
