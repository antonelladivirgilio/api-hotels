// Utilizamos funcionalidades de ES6
"use strict";
// mongodb://localhost:27017/market
// mongodb://<dbuser>:<dbpassword>@ds253891.mlab.com:53891/hotels
// mongodb://conection:conection1234@ds253891.mlab.com:53891/hotels
const config = {
    port: process.env.PORT || 3001,
    db:
        process.env.MONGODB_URI ||
        "mongodb://conection:conection1234@ds253891.mlab.com:53891/hotels"
};

module.exports = config;
