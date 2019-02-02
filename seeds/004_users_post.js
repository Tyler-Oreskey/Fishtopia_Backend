exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_post').del()
    .then(function() {
      // Inserts seed entries
      return knex('users_post').insert([
        {id: 1, users_id: 1, fish_id: 1, fish_size: 20, fishing_type: 'Fly Fishing', dry_fly: 'Elk hair Caddis', dry_size: 18, wet_fly: 'None', wet_size: 20, month: 'August', day: 26,  fish_pic: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjg66Dcu4LgAhVm34MKHRbtDgYQjRx6BAgBEAU&url=https%3A%2F%2Ffw.ky.gov%2FFish%2FPages%2FRainbow-Trout.aspx&psig=AOvVaw05JesdT4ksmBPwZoVkR-Th&ust=1548283521370898', comments: 'I caught a fish!!!', lat: 39.2508, lng: 106.2925},
        {id: 2, users_id: 2, fish_id: 5, fish_size: 15, fishing_type: 'Spin Fishing', dry_fly: 'None', dry_size: 0, wet_fly: 'RainbowWarrior', wet_size: 20, month: 'July', day: 5, fish_pic: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjd89Tf2oTgAhVG1IMKHXFQAg0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.igfa.org%2Fspecies%2F2327-asp.aspx&psig=AOvVaw2gTDfRL5Wor7xEtQgZbHXO&ust=1548360563092986', comments: 'I caught a gross looking fish!!!', lat: 38.9956, lng: 110.1596},
        {id: 3, users_id: 3, fish_id: 7, fish_size: 17, fishing_type: 'Fly Fishing', dry_fly: 'Grasshopper', dry_size: 12, wet_fly: 'Prince Nymph', wet_size: 18, month: 'March', day: 12, fish_pic: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi9wdvv2oTgAhUL0oMKHaRICpIQjRx6BAgBEAU&url=http%3A%2F%2Fwww.microscopy-uk.org.uk%2Fmag%2Fartnov08macro%2FCaitShannon%2Fcaitlinshannon_fishpage.html&psig=AOvVaw2gTDfRL5Wor7xEtQgZbHXO&ust=1548360563092986', comments: 'I caught a fish that has big cheeks!!!', lat: 42.5666, lng: 106.7025}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('users_post_id_seq', (SELECT MAX(id) FROM users_post));")
      })
    })
}
