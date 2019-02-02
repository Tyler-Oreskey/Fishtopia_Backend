exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments().notNullable().primary()
    table.string('first_name', 255).notNullable()
    table.string('last_name', 255).notNullable()
    table.text('avatar_url').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
}
