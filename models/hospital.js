const mongoose = require("mongoose");

var HospitalSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Necesita agregar el nombre del hospital."],
        max_length: [100, "El nombre no puede exceder los 100 caracteres."],
    },
    direccion: {
        type: String,
        required: [true, "Necesita agregar la direccion del hospital."],
        max_length: [150, "La direccion no puede exceder los 150 caracteres."],
    },
    provincia: {
        type: String,
        required: [true, "Necesita agregar una provincia."],
        max_length: [100, "Provincia no puede exceder los 100 caracteres."],
    },
    localidad: {
        type: String,
        required: [true, "Necesita agregar una localidad"],
        max_length: [100, "Localidad no puede exceder los 100 caracteres."],
    },
});

module.exports = mongoose.model("Hospital", HospitalSchema);