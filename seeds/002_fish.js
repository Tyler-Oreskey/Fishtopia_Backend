exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fish').del()
    .then(function() {
      // Inserts seed entries
      return knex('fish').insert([
        {id: 1, fish_name: 'Rainbow Trout'},
        {id: 2, fish_name: 'Cutthroat Trout'},
        {id: 3, fish_name: 'Brook Trout'},
        {id: 4, fish_name: 'Brown Trout'},
        {id: 5, fish_name: 'Lake Trout'},
        {id: 6, fish_name: 'Kokanee Salmon'},
        {id: 7, fish_name: 'Wiper Fish'},
        {id: 8, fish_name: 'Mountain Whitefish'},
        {id: 9, fish_name: 'Largemouth Bass'},
        {id: 10, fish_name: 'Northern Pike'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('fish_id_seq', (SELECT MAX(id) FROM fish));")
      })
    })
}
