exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_post', function(table) {
    // TABLE COLUMN DEFINITIONS HERE
    table.increments()
    table.foreign('users_id').references('users.id').onDelete('CASCADE')

    table.integer('users_id').notNullable()
    table.string('name', 255).notNullable().defaultTo('')

    table.string('fish_name', 255).notNullable().defaultTo('')
    table.integer('fish_size').notNullable()
    table.string('fishing_type', 255).notNullable().defaultTo('')

    table.string('dry_fly', 255).notNullable().defaultTo('')
    table.integer('dry_size').notNullable()
    table.string('wet_fly', 255).notNullable().defaultTo('')
    table.integer('wet_size').notNullable()

    table.string('month', 255).notNullable().defaultTo('')
    table.integer('day').notNullable().defaultTo(0)

    table.text('comments').notNullable().defaultTo('')

    table.decimal('lat').notNullable()
    table.decimal('lng').notNullable()
    table.timestamps(true, true)
  })
}
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_post')
}
