exports.up = function (knex) {
	return knex.schema
		.createTable('medications', (table) => {
			table.string('rx').primary()
			table.string('generic')
			table.string('dosage').notNullable()
			table.string('frequency').notNullable()
			table.string('times')
			table.integer('quantity').notNullable()
			table.string('use')
			table.string('why')
			table.string('description')
			table.string('side')
			table.string('serious')
			table.integer('major')
			table.integer('moderate')
			table.integer('minor')
			table.string('interactions')
		})
		.createTable('entries', (table) => {
			table.increments('id').primary()
			table.string('date').notNullable()
			table.string('note').notNullable()
		})
}

exports.down = function (knex) {
	return knex.schema.dropTable('entries').dropTable('medications')
}
