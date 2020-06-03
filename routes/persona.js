const express = require('express');
const PersonaController = require('../controllers/persona');
const router = express.Router();

router.route('/').get(PersonaController.getPersonas).post(PersonaController.createPersona);
router.route('/:id').get(PersonaController.getPersona).put(PersonaController.updatePersona).delete(PersonaController.deletePersona);

module.exports = router;