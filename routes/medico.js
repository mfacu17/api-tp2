const express = require('express');
const MedicoController = require('../controllers/medico');
const router = express.Router();

router.route('/').get(MedicoController.getMedicos).post(MedicoController.createMedico);
router.route('/:id').get(MedicoController.getMedico).put(MedicoController.updateMedico).delete(MedicoController.deleteMedico);

module.exports = router;