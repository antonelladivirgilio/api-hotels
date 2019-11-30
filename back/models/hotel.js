/**
  * 
  * Modelo para Hotel
  * 
  */

// Utilizamos funcionalidades de ES6
"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HotelSchema = Schema({
    name: { type: String, required: true },
    stars: { type: Number, default: 0, required: true },
    price: { type: Number, default: 0, required: true },
    image: { type: String, required: true },
    amenities: { type: [String], required: true }
});

module.exports = mongoose.model("Hotel", HotelSchema);
