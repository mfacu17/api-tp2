const mongoose = require("mongoose");

const URI = process.env.MONGO_URI ?
    process.env.MONGO_URI :
    "mongodb://localhost/apptest";

const connectDB = async() => {
    let connect = await mongoose.connect(URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
    console.log(`Conectado a la base de datos: ${connect.connections[0].host}`);
};

module.exports = connectDB;