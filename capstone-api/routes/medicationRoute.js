const router = require('express').Router()
const medicationController = require('../controllers/medicationsController')

router.route('/').get(medicationController.index).post(medicationController.addMedication)

router.route('/:rx').get(medicationController.singleMedication).patch(medicationController.updateMedication).delete(medicationController.deleteMedication)

module.exports = router
