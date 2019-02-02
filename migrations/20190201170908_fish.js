exports.up = function(knex, Promise) {
  return knex.schema.createTable('fish', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('fish_name', 255).notNullable()
    table.timestamps(true, true)
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('fish')
}
