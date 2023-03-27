const db = require("../models")
const { Op } = require("sequelize")

const genreService = {

    getAll : async () => {
        let allGenre = await db.Genre.findAll({
            include : db.Track
        })
        return allGenre
    },

    getOneById : async (id) => {
        const oneGenre = await db.Genre.findByPk(id, {
            include : db.Track,
            attributes : ["name"]
        })

        return oneGenre
    },

    add : async (newGenre) => {
        const genreCreated = await db.Genre.create(newGenre)
        return genreCreated
    },

    searchByName : async (name) => {
        const genreFound = await db.Genre.findAll({
            where : {
                name : {
                    [Op.substring] : name
                }
            }
        })
        //lien vers la liste des Op de sequelize
        //https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
        return genreFound
    },
}


module.exports = genreService

