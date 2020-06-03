const express = require('express');
const HospitalController = require('../controllers/hospital');
const router = express.Router();

router.route('/').get(HospitalController.getHospitales).post(HospitalController.createHospital);
router.route('/:id').get(HospitalController.getHospital).put(HospitalController.updateHospital).delete(HospitalController.deleteHospital);

module.exports = router;