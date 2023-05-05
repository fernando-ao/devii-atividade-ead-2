const express = require("express");
const server = express();
const PORT = 3006;

server.get("/", (req, res) => {
  res.status(200).send("OK");
});

server.listen(PORT, () => {
  console.log(`Servidor sendo executado em http://localhost:${PORT}/`);
});
