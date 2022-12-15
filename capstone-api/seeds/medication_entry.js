const entryData = require('../seed_data/entries')
const medicationData = require('../seed_data/medications')

exports.seed = function (knex) {
	return knex('medications')
		.del()
		.then(function () {
			return knex('medications').insert(medicationData)
		})
		.then(() => {
			return knex('entries').del()
		})
		.then(() => {
			return knex('entries').insert(entryData)
		})
}
