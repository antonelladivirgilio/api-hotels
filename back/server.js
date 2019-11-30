/**
  * 
  * Punto de entrada a la aplicacion
  * 
  */

// Utilizamos funcionalidades de ES6
"use strict";

const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");

const port = config.port;

// Conexion con  la bbdd
mongoose.connect(config.db, { useNewUrlParser: true }, (error, resp) => {
    if (error) {
        console.log(`Error en la conexion con la BBDD, Error: ${error}`);
    }

    app.listen(port, () => {
        console.log(`Aplicacion corriendo en http://localhost:${port}`);
        console.log(`Conectado a la BBDD: ${config.db}`);
    });
});
