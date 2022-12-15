const router = require('express').Router()
const entriesController = require('../controllers/entriesController')

router.route('/').get(entriesController.index)

router.route('/:date').get(entriesController.singleEntry).post(entriesController.addEntry).patch(entriesController.updateEntry).delete(entriesController.deleteEntry)

module.exports = router
