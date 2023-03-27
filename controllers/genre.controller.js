const genreService = require("../services/genre.service")

const genreController = {

    getAll : async (req, res, next) => {
        let allGenre = await genreService.getAll()  
             
        res.json(allGenre)
    },

    getOneById : async (req, res, next) => {
        let id = req.params.id
        let oneGenre = await genreService.getOneById(id)

        res.json(oneGenre)
    },

    add : async (req, res, next) => {
        let createGenre = req.body
        let created = await genreService.add(createGenre)

        res.json(created)
    },

    searchByName : async (req, res, next) => {
        let name = req.params.name
        let oneGenre = await genreService.searchByName(name)

        res.json(oneGenre)
    },
}


module.exports = genreController

