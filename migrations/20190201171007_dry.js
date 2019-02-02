exports.up = function(knex, Promise) {
  return knex.schema.createTable('dry', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.string('name', 255).notNullable()
    table.timestamps(true, true)
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dry')
}
