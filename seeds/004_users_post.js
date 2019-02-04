exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_post').del()
    .then(function() {
      // Inserts seed entries
      return knex('users_post').insert([
        {id: 1, users_id: 1, name: 'Tyler', fish_name:'Rainbow Trout', fish_size: 20, fishing_type: 'Fly Fishing', dry_fly: 'Elk hair Caddis', dry_size: 18, wet_fly: 'None', wet_size: 20, month: 'August', day: 26, comments: 'I caught a fish!!!', lat: 39.2508, lng: 106.2925},
        {id: 2, users_id: 2, name: 'Michael', fish_name:'Rainbow Trout', fish_size: 15, fishing_type: 'Spin Fishing', dry_fly: 'None', dry_size: 0, wet_fly: 'RainbowWarrior', wet_size: 20, month: 'July', day: 5, comments: 'I caught a gross looking fish!!!', lat: 38.9956, lng: 110.1596},
        {id: 3, users_id: 3, name: 'Robby', fish_name:'Rainbow Trout', fish_size: 17, fishing_type: 'Fly Fishing', dry_fly: 'Grasshopper', dry_size: 12, wet_fly: 'Prince Nymph', wet_size: 18, month: 'March', day: 12, comments: 'I caught a fish that has big cheeks!!!', lat: 42.5666, lng: 106.7025}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('users_post_id_seq', (SELECT MAX(id) FROM users_post));")
      })
    })
}
