const {Router} = require('express')
const routes = Router()

routes.get('/help',(req,res)=>{
    const games = [
        {
          "id": 1,
          "title": "Super Mario Bros.",
          "platforms": ["Nintendo Entertainment System", "Game Boy Advance", "Nintendo Switch"],
          "year": 1985,
          "publisher": "Nintendo",
          "genre": "Platformer",
          "rating": 9.0
        },
        {
          "id": 2,
          "title": "The Legend of Zelda: Ocarina of Time",
          "platforms": ["Nintendo 64", "GameCube", "Wii Virtual Console", "Nintendo 3DS"],
          "year": 1998,
          "publisher": "Nintendo",
          "genre": "Action-Adventure",
          "rating": 9.5
        },
        {
          "id": 3,
          "title": "Final Fantasy VII",
          "platforms": ["PlayStation", "PlayStation 4", "PC"],
          "year": 1997,
          "publisher": "Square",
          "genre": "Role-playing game",
          "rating": 9.2
        },
        {
          "id": 4,
          "title": "Minecraft",
          "platforms": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "Mobile"],
          "year": 2009,
          "publisher": "Mojang Studios",
          "genre": "Sandbox",
          "rating": 8.6
        },
        {
          "id": 5,
          "title": "Overwatch",
          "platforms": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
          "year": 2016,
          "publisher": "Blizzard Entertainment",
          "genre": "First-person shooter",
          "rating": 8.3
        }
      ];
      res.send(games)
}),


routes.post('/help',(req,res)=>{
    const dato = req.body
    console.log(dato)
    res.send(dato)
})
module.exports = routes