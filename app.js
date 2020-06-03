const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Cargando variables de entorno
dotenv.config({
    path: "./config/cfg.env"
});

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());

// BodyParser
app.use(express.json());

// Archivos de rutas
const persona = require('./routes/persona');
const medico = require('./routes/medico');
const hospital = require('./routes/hospital');

// Rutas
app.use('/api/persona', persona);
app.use('/api/medico', medico);
app.use('/api/hospital', hospital);

// Conectando a la base de datos
connectDB();

// Conectando al servidor
app.listen(PORT, () => console.log(`Escuchando el puerto ${PORT} :D`));