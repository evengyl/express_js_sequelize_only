const db = require("../models")


const artistService = {

    getAll : async () => {
        return await db.Artist.findAll({
            include : [ {
                model : db.Track, attributes : ["name"]
            } ]
            //paranoid : false -> permet de récupérer les lignes delete soft
        })
    },

    getOneById : async (id) => {
        return await db.Artist.findByPk(id)
    },

    add : async (artist) => {
        return await db.Artist.create(artist)
    },

    update : async (id, artist) => {
        let updatedArtist =  await db.Artist.update(artist, {
            where : { id },
            returning : true
        })

        return updatedArtist
    },

    delete : async (id) => {
        return await db.Artist.destroy({
            where : { id },
            //force: true -> force le hard delete !!!
        })
    }
}


module.exports = artistService

