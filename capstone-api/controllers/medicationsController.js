const knex = require('knex')(require('../knexfile'))

exports.index = (_req, res) => {
	knex('medications')
		.select('rx', 'generic', 'dosage', 'frequency', 'times', 'quantity', 'use', 'why', 'description', 'side', 'serious', 'major', 'moderate', 'minor', 'interactions')
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => res.status(400).send(`Error retrieving Medications ${err}`))
}

exports.singleMedication = (req, res) => {
	knex('medications')
		.where({ rx: req.params.rx })
		.then((data) => {
			if (!data.length) {
				return res.status(404).send(`Medication: ${req.params.rx} was not found`)
			}
			res.status(200).json(data[0])
		})
		.catch((err) => res.status(400).send(`Error retrieving Medication ${req.params.rx} ${err}`))
}

exports.addMedication = (req, res) => {
	if (!req.body.rx || !req.body.dosage || !req.body.frequency || !req.body.quantity) {
		return res.status(400).send('Please make sure to provide rx name, frequency, quantity, and dosage info fields in request')
	}

	knex('medications')
		.insert(req.body)
		.then((data) => {
			const newMedicationURL = `/medications/${data[0]}`
			res.status(201).location(newMedicationURL).end(newMedicationURL)
		})
		.catch((err) => res.status(400).send(`Error creating Medication: ${err}`))
}

exports.updateMedication = (req, res) => {
	knex('medications')
		.update(req.body)
		.where({ rx: req.params.rx })
		.then(() => {
			res.status(200).send(`The Medication ${req.params.rx} has been updated!`)
		})
		.catch((err) => res.status(400).send(`Error updating Medication ${req.params.rx} ${err}`))
}

exports.deleteMedication = (req, res) => {
	knex('medications')
		.delete()
		.where({ rx: req.params.rx })
		.then(() => {
			res.status(204).send(`The Medication ${req.params.rx} has been deleted`)
		})
		.catch((err) => res.status(400).send(`Error deleting Medication ${req.params.rx} ${err}`))
}
