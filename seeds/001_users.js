exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Tyler', last_name: 'Oreskey', avatar_url: 'https://avatars3.githubusercontent.com/u/41089998?s=400&u=e15b2f3945f20287ddb1d10928eb03a704227dec&v=4'},
        {id: 2, first_name: 'Michael', last_name: 'Oreskey', avatar_url: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiuvI240YTgAhVlooMKHflqCs4QjRx6BAgBEAU&url=https%3A%2F%2Fwww.partycity.com%2Fclass-nerd-glasses-278696.html&psig=AOvVaw2gjkTIhdm-NzS1D8_QgBxT&ust=1548358063718777'},
        {id: 3, first_name: 'Robby', last_name: 'Garren', avatar_url: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj1ip7Q0YTgAhUao4MKHcI9CbcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.halloweencostumes.com%2F50s-class-nerd-costume.html&psig=AOvVaw2gjkTIhdm-NzS1D8_QgBxT&ust=1548358063718777'},
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
      })
    })
}
