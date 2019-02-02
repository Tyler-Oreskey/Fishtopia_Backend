exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dry').del()
    .then(function() {
      // Inserts seed entries
      return knex('dry').insert([
        {id: 1, name: 'Parachute Adams'},
        {id: 2, name: 'Elk Hair Caddis'},
        {id: 3, name: 'Rainy’s X-Fly Parachute BWO'},
        {id: 4, name: 'Sulphur Parachute'},
        {id: 5, name: 'Stimulator'},
        {id: 6, name: 'Grand Hopper'},
        {id: 7, name: 'Morrish Mouse'},
        {id: 8, name: 'Blue Wing Olive'},
        {id: 9, name: 'Taylor’s Fat Albert'},
        {id: 10, name: 'Hot Wing Caddis'},
        {id: 11, name: 'Royal PMX'},
        {id: 12, name: 'Adams Fly'},
        {id: 13, name: 'CDC Bugging Emerger'},
        {id: 14, name: 'Chubby Chernobyl'},
        {id: 15, name: 'Pheasant Tail'},
        {id: 16, name: 'Sparkle Dun'},
        {id: 17, name: 'Cricket'},
        {id: 18, name: 'Royal Wulff'},
        {id: 19, name: 'Fathead Beetle'},
        {id: 20, name: 'Parachute Hopper'},
        {id: 21, name: 'Irresistible Wulff'},
        {id: 22, name: 'Yellow Stimulator'},
        {id: 23, name: 'Royal Coachman'},
        {id: 24, name: 'Mosquito'},
        {id: 25, name: 'Humpy'},
        {id: 26, name: 'Hot Legs Hopper'},
        {id: 27, name: 'Mayfly Cripple Callibaetis'},
        {id: 28, name: 'Galloups Biot Cripple BWO'},
        {id: 29, name: 'Pale Morning Dun'},
        {id: 30, name: 'Thunder Thighs Hopper'},
        {id: 31, name: 'Morrish Hopper'},
        {id: 32, name: 'Goddard Caddis'},
        {id: 33, name: 'Trico Spent Wing'},
        {id: 34, name: 'Parachute Hare’s'},
        {id: 35, name: 'Bat Wing Emerger'},
        {id: 36, name: 'Hickman’s Mr. Hankey'},
        {id: 37, name: 'Gnat'},
        {id: 38, name: 'Drake'},
        {id: 39, name: 'Foam Caddis'},
        {id: 40, name: 'Renegade'},
        {id: 41, name: 'Light Cahill'},
        {id: 42, name: 'CDC Biot Compardun'},
        {id: 43, name: 'Red Quill'},
        {id: 44, name: 'March Brown'},
        {id: 45, name: 'Egan’s Corn-Fed Caddis'},
        {id: 46, name: 'Modular Drake'},
        {id: 47, name: 'Adam’s Superfly'},
        {id: 48, name: 'Foam Flying Ant'},
        {id: 49, name: 'Quill Gordon'},
        {id: 50, name: 'Light Hendrickson'},
        {id: 51, name: 'Dark Hendrickson'},
        {id: 52, name: 'Royal Trude'},
        {id: 53, name: 'Flick’s March Brown'},
        {id: 54, name: 'None'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('dry_id_seq', (SELECT MAX(id) FROM dry));")
      })
    })
}
