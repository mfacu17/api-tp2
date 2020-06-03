const mongoose = require("mongoose");

var PersonaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: [true, "Necesita agregar un nombre."],
        maxlength: [35, "El nombre no puede ser tan largo."],
    },
    apellido: {
        type: String,
        trim: true,
        required: [true, "Necesita agregar un apellido."],
        maxlength: [25, "El apellido no puede ser tan largo."],
    },
    dni: {
        type: Number,
        required: [true, "Necesita agregar un DNI."],
        maxlength: [8, "El dni no tiene más de 8 números."],
    },
    genero: {
        type: String,
        enum: ["Hombre", "Mujer", "Otro"],
        default: "Hombre",
    },
    fecha_nacimiento: {
        type: Date,
        required: [true, "Necesita agregar una fecha de nacimiento."],
        default: Date.now,
    },
});

module.exports = mongoose.model("Persona", PersonaSchema);