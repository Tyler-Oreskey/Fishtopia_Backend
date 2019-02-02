exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wet').del()
    .then(function() {
      // Inserts seed entries
      return knex('wet').insert([
        {id: 1, name: 'Rainbow Warrior'},
        {id: 2, name: 'Wooly Bugger'},
        {id: 3, name: 'Bunny Leech'},
        {id: 4, name: 'Gold-Ribbon Hare’s Ear'},
        {id: 5, name: 'Crayfish'},
        {id: 6, name: 'Pheasant Tail Nymph'},
        {id: 7, name: 'San Juan Worm'},
        {id: 8, name: 'Muddler Minnow'},
        {id: 9, name: 'Soft Hackle'},
        {id: 10, name: 'TH Zebra Midge'},
        {id: 11, name: 'Higa’s S.O.S.'},
        {id: 12, name: 'Holy Grail'},
        {id: 13, name: 'Prince'},
        {id: 14, name: 'Soft Hackle Pheasant Tail'},
        {id: 15, name: 'Hot Spot Pheasant Tail'},
        {id: 16, name: 'American Pheasant Tail'},
        {id: 17, name: 'Nemec Stone'},
        {id: 18, name: 'Tunghead Stonefly'},
        {id: 19, name: 'Perdigon'},
        {id: 20, name: 'Hare’s Ear'},
        {id: 21, name: 'Czech-Mate'},
        {id: 22, name: 'English Pheasant Tail'},
        {id: 23, name: 'Purple Haze'},
        {id: 24, name: 'Tactical Sob-Czech'},
        {id: 25, name: 'Steelhead Hammer'},
        {id: 26, name: 'Sexy Stone'},
        {id: 27, name: 'CJ Nymph'},
        {id: 28, name: 'Scud Wet Hare’s Ear'},
        {id: 29, name: 'Bead Head American Pheasant Tail'},
        {id: 30, name: 'Pupa'},
        {id: 31, name: 'Tactical Tungsten Belly Worm'},
        {id: 32, name: 'Flexifloss Chironomid'},
        {id: 33, name: 'Trout Crayfish'},
        {id: 34, name: 'TH Duracell Jig'},
        {id: 35, name: 'TH Eggi Juan Kenobi'},
        {id: 36, name: 'White Lightning'},
        {id: 37, name: 'Tactical Purple Reign'},
        {id: 38, name: 'Shaky Worm'},
        {id: 39, name: 'WD-40'},
        {id: 40, name: 'Double Dot Egg'},
        {id: 41, name: 'DD Midge'},
        {id: 42, name: 'Electric Prince'},
        {id: 43, name: 'Micro Nuke Egg'},
        {id: 44, name: 'Killer Bug'},
        {id: 45, name: 'Disco Midge Larva'},
        {id: 46, name: 'Tungsten Bead Auto Emerger'},
        {id: 47, name: 'Princess Nymph'},
        {id: 48, name: 'Freshwater Shrimp'},
        {id: 49, name: 'Mysis Shrimp'},
        {id: 50, name: 'Golden Stone'},
        {id: 51, name: 'Sow Bug'},
        {id: 52, name: 'Brassie'},
        {id: 52, name: 'None'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('wet_id_seq', (SELECT MAX(id) FROM wet));")
      })
    })
}
