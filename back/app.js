// Utilizamos funcionalidades de ES6
"use strict";

// Importamos express para comunicacion cliente servidor
const express = require("express");

// Importamos body-parser para parsear el cuerpo de la peticion
const bodyParser = require("body-parser");

// Endpoints
const HotelEndpoints = require("./routes/hotel");

// App
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Seteo el url para acceder a los endpoints y utilizo mi modulo
app.use("/endpoints", HotelEndpoints);

module.exports = app;
