/**
  * 
  * Endpoints
  * 
  */

// Utilizamos funcionalidades de ES6
"use strict";

// Importamos express para comunicacion cliente servidor
const express = require("express");
const HotelEndpoints = express.Router();

// Controlador de hotel
const HotelCtrl = require("../controllers/hotel");

// Nuevo registro de hotel
HotelEndpoints.post("/hotel", HotelCtrl.postHotel);

// Obtener todos los hoteles
HotelEndpoints.get("/hotel", HotelCtrl.getHotels);

// Obtener un hotel
HotelEndpoints.get("/hotel/:hotelId", HotelCtrl.getHotel);

// Actualizar un hotel
HotelEndpoints.put("/hotel/:hotelId", HotelCtrl.updateHotel);

// Eliminar un hotel
HotelEndpoints.delete("/hotel/:hotelId", HotelCtrl.deleteHotel);

module.exports = HotelEndpoints;
