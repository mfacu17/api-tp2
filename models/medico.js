const mongoose = require("mongoose");

var MedicoSchema = new mongoose.Schema({
    persona: {
        type: mongoose.Types.ObjectId,
        ref: "Persona",
        required: [true, "Necesita agregar una persona."],
    },
    matricula: {
        type: String,
        required: [true, "Necesita agregar una matricula."],
        max_length: [30, "La matricula no puede tener mas de 30 caracteres."],
    },
    max_pacientes: {
        type: Number,
        max: [100, "El valor no puede exceder a 100 pacientes."],
    },
});

module.exports = mongoose.model("Medico", MedicoSchema);