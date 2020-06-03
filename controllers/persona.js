const asyncHandler = require("../middlewares/async");

const Persona = require("../models/Persona");

const controller = {
    getPersonas: asyncHandler(async(req, res, next) => {
        let personas = await Persona.find();
        res.status(200).json({
            success: true,
            cantidad: personas.length,
            datos: personas,
        });
    }),
    getPersona: asyncHandler(async(req, res, next) => {
        let persona = await Persona.findById(req.params.id);
        if (!persona) {
            return next(res.status(404).json({
                success: false,
                message: `No se encontró a la persona con el id ${req.params.id}`
            }));
        }
        res.status(200).json({
            success: true,
            datos: persona,
        });
    }),
    createPersona: asyncHandler(async(req, res, next) => {
        let persona = await Persona.create(req.body);
        res.status(200).json({
            success: true,
            datos: persona,
        });
    }),
    updatePersona: asyncHandler(async(req, res, next) => {
        let persona = await Persona.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!persona) {
            return next(res.status(404).json({
                success: false,
                message: `No se encontró a la persona con el id ${req.params.id}`
            }));
        }
        res.status(200).json({
            success: true,
            datos: persona,
        });
    }),
    deletePersona: asyncHandler(async(req, res, next) => {
        let persona = await Persona.findByIdAndDelete(req.params.id);
        if (!persona) {
            return next(res.status(404).json({
                success: false,
                message: `No se encontró a la persona con el id ${req.params.id}`
            }));
        }
        res.status(200).json({
            success: true,
            message: "Persona eliminada con éxito.",
        });
    }),
};

module.exports = controller;