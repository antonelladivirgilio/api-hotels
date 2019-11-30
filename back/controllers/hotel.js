/**
  * 
  * Comunicacion con la BBDD
  * 
  */

// Utilizamos funcionalidades de ES6
"use strict";

// Schema Hotel
const Hotel = require("../models/hotel");

const hotelApi = {
    // Obtener informacion de un hotel
    getHotel: (request, response) => {
        let hotelId = request.params.hotelId;

        Hotel.findById(hotelId, (error, hotel) => {
            // Enviar mensaje por error
            if (error)
                return response.status(500).json({
                    message: `Error en "getHotel" al obtener peticion del servidor, ${error}`
                });
            // Enviar mensaje si no encuentro el hotel
            if (!hotel)
                return response
                    .status(404)
                    .send({ message: "No existe registro del hotel" });
            // Enviar hotel encontrado en la bbdd
            response.status(200).json(hotel);
        });
    },

    // Obtener todos los hoteles
    getHotels: (request, response) => {
        Hotel.find({}, (error, hoteles) => {
            // Enviar mensaje por error
            if (error)
                return response.status(500).json({
                    message: `Error en "getHotels" al obtener peticion del servidor, ${error}`
                });

            // Enviar mensaje si no encuentro hoteles
            if (!hoteles)
                return response
                    .status(404)
                    .json({ message: "No existen registros del hoteles" });

            // Enviar hoteles encontrado en la bbdd
            response.status(200).json(hoteles);
        });
    },

    // Actualizar un hotel
    updateHotel: (request, response) => {
        let hotelId = request.params.hotelId;
        let update = request.body;

        Hotel.findByIdAndUpdate(hotelId, update, (error, hotel) => {
            // Enviar mensaje por error
            if (error)
                return response.status(500).json({
                    message: `Error en "updateHotel" al obtener peticion del servidor, ${error}`
                });

            // Enviar mensaje si no encuentro hotel
            if (!hotel)
                return response
                    .status(404)
                    .send({ message: "No existe el hotel para actualizar" });

            // Status por update realizado correctamente
            response.status(200).json({
                message: "Se actualizo la informacion del hotel correctamente"
            });
        });
    },

    // Eliminar un hotel
    deleteHotel: (request, response) => {
        let hotelId = request.params.hotelId;

        Hotel.findById(hotelId, (error, hotel) => {
            // Error del servidor al buscar el registro del hotel recibido
            if (error)
                return response.status(500).send({
                    message: `Error en "deleteHotel" al buscar buscar el registro del hotel, ${error}`
                });

            // Registro del hotel no encontrado en la bbdd
            if (!hotelId)
                return response.status(404).send({
                    message: "No exite registro del hotel a eliminar"
                });

            // Elimino el registro recibido
            hotel.remove(error => {
                // Error al intentar eliminar el registro de la bbdd
                if (error)
                    return response.status(500).send({
                        message: `No se pudo eliminar el registro del hotel, ${error}`
                    });
                // Status al eliminar correctamente el registro del hotel
                response
                    .status(200)
                    .send({ message: "Se elimino corrrectamente el registro" });
            });
        });
    },

    // Agregar registro de hotel
    postHotel: (request, response) => {
        // Crear nuevo hotel
        let hotel = new Hotel();

        // Capturar las propiedades del hotel del request.body
        let { name, stars, price, image, amenities } = request.body;

        // Setear las properties del nuevo hotel
        hotel.name = name;
        hotel.stars = stars;
        hotel.price = price;
        hotel.image = image;
        hotel.amenities = amenities;

        // Guardar en la BBDD
        hotel.save((error, hotelStored) => {
            // Error al guardar el nuevo hotel
            if (error)
                response.status(500).send({
                    message: `Error al guardar en la base de datos , ${error}`
                });

            // Hotel guardado correctamente
            response.status(200).send({
                message: "Se registro el producto correctamente"
            });
        });
    }
};

module.exports = hotelApi;
