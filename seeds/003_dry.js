exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dry').del()
    .then(function() {
      // Inserts seed entries
      return knex('dry').insert([
        {id: 1, name: 'None'},
        {id: 2, name: 'Elk Hair Caddis'},
        {id: 3, name: 'Parachute Adams'},
        {id: 4, name: 'Rainy’s X-Fly Parachute BWO'},
        {id: 5, name: 'Sulphur Parachute'},
        {id: 6, name: 'Stimulator'},
        {id: 7, name: 'Grand Hopper'},
        {id: 8, name: 'Morrish Mouse'},
        {id: 9, name: 'Blue Wing Olive'},
        {id: 10, name: 'Taylor’s Fat Albert'},
        {id: 11, name: 'Hot Wing Caddis'},
        {id: 12, name: 'Royal PMX'},
        {id: 13, name: 'Adams Fly'},
        {id: 14, name: 'CDC Bugging Emerger'},
        {id: 15, name: 'Chubby Chernobyl'},
        {id: 16, name: 'Pheasant Tail'},
        {id: 17, name: 'Sparkle Dun'},
        {id: 18, name: 'Cricket'},
        {id: 19, name: 'Royal Wulff'},
        {id: 20, name: 'Fathead Beetle'},
        {id: 21, name: 'Parachute Hopper'},
        {id: 22, name: 'Irresistible Wulff'},
        {id: 23, name: 'Yellow Stimulator'},
        {id: 24, name: 'Royal Coachman'},
        {id: 25, name: 'Mosquito'},
        {id: 26, name: 'Humpy'},
        {id: 27, name: 'Hot Legs Hopper'},
        {id: 28, name: 'Mayfly Cripple Callibaetis'},
        {id: 29, name: 'Galloups Biot Cripple BWO'},
        {id: 30, name: 'Pale Morning Dun'},
        {id: 31, name: 'Thunder Thighs Hopper'},
        {id: 32, name: 'Morrish Hopper'},
        {id: 33, name: 'Goddard Caddis'},
        {id: 34, name: 'Trico Spent Wing'},
        {id: 35, name: 'Parachute Hare’s'},
        {id: 36, name: 'Bat Wing Emerger'},
        {id: 37, name: 'Hickman’s Mr. Hankey'},
        {id: 38, name: 'Gnat'},
        {id: 39, name: 'Drake'},
        {id: 40, name: 'Foam Caddis'},
        {id: 41, name: 'Renegade'},
        {id: 42, name: 'Light Cahill'},
        {id: 43, name: 'CDC Biot Compardun'},
        {id: 44, name: 'Red Quill'},
        {id: 45, name: 'March Brown'},
        {id: 46, name: 'Egan’s Corn-Fed Caddis'},
        {id: 47, name: 'Modular Drake'},
        {id: 48, name: 'Adam’s Superfly'},
        {id: 49, name: 'Foam Flying Ant'},
        {id: 50, name: 'Quill Gordon'},
        {id: 51, name: 'Light Hendrickson'},
        {id: 52, name: 'Dark Hendrickson'},
        {id: 53, name: 'Royal Trude'},
        {id: 54, name: 'Flick’s March Brown'}
      ])
      .then(function() {
        // Moves id column (PK) auto-incrementer to correct value after inserts
        return knex.raw("SELECT setval('dry_id_seq', (SELECT MAX(id) FROM dry));")
      })
    })
}
