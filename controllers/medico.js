const asyncHandler = require('../middlewares/async');

const Medico = require('../models/medico');

var controller = {
    getMedicos: asyncHandler(async(req, res, next) => {
        let medicos = await Medico.find();
        res.status(200).json({
            success: true,
            cantidad: medicos.length,
            datos: medicos
        });
    }),
    getMedico: asyncHandler(async(req, res, next) => {
        let medico = await Medico.findById(req.params.id);
        if (!medico) {
            return next(res.status(404).json({
                success: false,
                message: `No existe el médico con id ${req.params.id}`
            }));
        }
        res.status(200).json({
            success: true,
            datos: medico
        })
    }),
    createMedico: asyncHandler(async(req, res, next) => {
        let medico = await Medico.create(req.body);
        res.status(200).json({
            success: true,
            datos: medico
        });
    }),
    updateMedico: asyncHandler(async(req, res, next) => {
        let medico = await Medico.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!medico) {
            return next(res.status(404).json({
                success: false,
                message: `No existe el médico con el id ${req.params.id}`
            }));
        }
        res.status(200).json({
            success: true,
            datos: medico
        });
    }),
    deleteMedico: asyncHandler(async(req, res, next) => {
        let medico = await Medico.findByIdAndDelete(req.params.id)
        if (!medico) {
            return next(res.status(404).json({
                success: false,
                message: `No existe el médico con el id ${req.params.id}`
            }));
        }
        res.status(200).json({
            success: true,
            message: 'Médico borrado con éxito.'
        });
    })
}

module.exports = controller;