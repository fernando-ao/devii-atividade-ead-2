const express = require("express");
const controller = require("./../controllers/controllerCustomer");
const routes = express.Router();

routes.get("/", controller.getAll);
routes.get("/:id", controller.getById);
routes.get("/cidade/:cityName", controller.getByCityName);  /* Em nomes compostos é preciso substituir 
os espaços em branco por '%20' Ex.: /cidade/São%20Lourenço%20do%20Oeste */
routes.post("/", controller.create);
routes.put("/:id", controller.update);
routes.delete("/:id", controller.delete);

module.exports = routes;
