exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('wet').del()
    .then(function() {
      // Inserts seed entries
      return knex('wet').insert([
        {id: 1, name: 'None'},
        {id: 2, name: 'Rainbow Warrior'},
        {id: 3, name: 'Wooly Bugger'},
        {id: 4, name: 'Bunny Leech'},
        {id: 5, name: 'Gold-Ribbon Hare’s Ear'},
        {id: 6, name: 'Crayfish'},
        {id: 7, name: 'Pheasant Tail Nymph'},
        {id: 8, name: 'San Juan Worm'},
        {id: 9, name: 'Muddler Minnow'},
        {id: 10, name: 'Soft Hackle'},
        {id: 11, name: 'TH Zebra Midge'},
        {id: 12, name: 'Higa’s S.O.S.'},
        {id: 13, name: 'Holy Grail'},
        {id: 14, name: 'Prince'},
        {id: 15, name: 'Soft Hackle Pheasant Tail'},
        {id: 16, name: 'Hot Spot Pheasant Tail'},
        {id: 17, name: 'American Pheasant Tail'},
        {id: 18, name: 'Nemec Stone'},
        {id: 19, name: 'Tunghead Stonefly'},
        {id: 20, name: 'Perdigon'},
        {id: 21, name: 'Hare’s Ear'},
        {id: 22, name: 'Czech-Mate'},
        {id: 23, name: 'English Pheasant Tail'},
        {id: 24, name: 'Purple Haze'},
        {id: 25, name: 'Tactical Sob-Czech'},
        {id: 26, name: 'Steelhead Hammer'},
        {id: 27, name: 'Sexy Stone'},
        {id: 28, name: 'CJ Nymph'},
        {id: 29, name: 'Scud Wet Hare’s Ear'},
        {id: 30, name: 'Bead Head American Pheasant Tail'},
        {id: 31, name: 'Pupa'},
        {id: 32, name: 'Tactical Tungsten Belly Worm'},
        {id: 33, name: 'Flexifloss Chironomid'},
        {id: 34, name: 'Trout Crayfish'},
        {id: 35, name: 'TH Duracell Jig'},
        {id: 36, name: 'TH Eggi Juan Kenobi'},
        {id: 37, name: 'White Lightning'},
        {id: 38, name: 'Tactical Purple Reign'},
        {id: 39, name: 'Shaky Worm'},
        {id: 40, name: 'WD-40'},
        {id: 41, name: 'Double Dot Egg'},
        {id: 42, name: 'DD Midge'},
        {id: 43, name: 'Electric Prince'},
        {id: 44, name: 'Micro Nuke Egg'},
        {id: 45, name: 'Killer Bug'},
        {id: 46, name: 'Disco Midge Larva'},
        {id: 47, name: 'Tungsten Bead Auto Emerger'},
        {id: 48, name: 'Princess Nymph'},
        {id: 49, name: 'Freshwater Shrimp'},
        {id: 50, name: 'Mysis Shrimp'},
        {id: 51, name: 'Golden Stone'},
        {id: 52, name: 'Sow Bug'},
        {id: 53, name: 'Brassie'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('wet_id_seq', (SELECT MAX(id) FROM wet));")
      })
    })
}
