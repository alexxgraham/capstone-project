const knex = require('knex')(require('../knexfile'))

exports.index = (_req, res) => {
	knex('entries')
		.then((data) => {
			res.status(200).json(data)
		})
		.catch((err) => res.status(400).send(`Error retrieving Entries: ${err}`))
}

exports.singleEntry = (req, res) => {
	knex('entries')
		.where({ date: req.params.date })
		.then((data) => {
			if (!data.length) {
				return res.status(404).send(`Entry ${req.params.date} was not found`)
			}
			res.status(200).json(data[0])
		})
		.catch((err) => res.status(400).send(`Error retrieving entry ${req.params.date} ${err}`))
}

exports.addEntry = (req, res) => {
	if (!req.body.date || !req.body.note) {
		return res.status(400).send('Please make sure to provide a date and note fields in request')
	}

	knex('entries')
		.insert(req.body)
		.then((data) => {
			const newEntryURL = `/entries/${data[0]}`
			res.status(201).location(newEntryURL).end(newEntryURL)
		})
		.catch((err) => res.status(400).send(`Error creating Entry: ${err}`))
}

exports.updateEntry = (req, res) => {
	knex('entries')
		.update(req.body)
		.where({ date: req.params.date })
		.then(() => {
			res.status(200).send(`The Entries for ${req.params.date} have been updated!`)
		})
		.catch((err) => res.status(400).send(`Error updating Entries for ${req.params.date} ${err}`))
}

exports.deleteEntry = (req, res) => {
	knex('entries')
		.delete()
		.where({ date: req.params.date })
		.then(() => {
			res.status(204).send(`The Entries for ${req.params.date} has been deleted`)
		})
		.catch((err) => res.status(400).send(`Error deleting Entries for ${req.params.date} ${err}`))
}
