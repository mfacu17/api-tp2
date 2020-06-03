const asyncHandler = require('../middlewares/async');

const Hospital = require('../models/hospital');

var controller = {
    getHospitales: asyncHandler(async(req, res, next) => {
        let hospitales = await Hospital.find();
        res.status(200).json({
            success: true,
            cantidad: hospitales.length,
            datos: hospitales
        });
    }),
    getHospital: asyncHandler(async(req, res, next) => {
        let hospital = await Hospital.findById(req.params.id);
        if (!hospital) {
            return next(res.status(404).json({
                success: false,
                message: `No existe el hospital con el id ${req.params.id}`
            }));
        }
        res.status(200).json({
            success: true,
            datos: hospital
        })
    }),
    createHospital: asyncHandler(async(req, res, next) => {
        let hospital = await Hospital.create(req.body);
        res.status(200).json({
            success: true,
            datos: hospital
        });
    }),
    updateHospital: asyncHandler(async(req, res, next) => {
        let hospital = await Hospital.findByIdAndUpdate(req.params.id, req.body);
        if (!hospital) {
            return next(res.status(404).json({
                success: false,
                message: `No existe el hospital con el id ${req.params.id}`
            }));
        }
        res.status(200).json({
            success: true,
            datos: hospital
        })
    }),
    deleteHospital: asyncHandler(async(req, res, next) => {
        let hospital = await Hospital.findByIdAndDelete(req.params.id);
        if (!hospital) {
            return next(res.status(404).json({
                success: false,
                message: `No existe el hospital con el id ${req.params.id}`
            }));
        }
        res.status(200).json({
            success: true,
            message: 'Hospital borrado con éxito.'
        })
    })
};

module.exports = controller;