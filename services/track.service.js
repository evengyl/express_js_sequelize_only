const db = require("../models")

const trackService = {

    getAll : async () => {
        let { count, rows } = await db.Track.findAndCountAll({
            include : [{
                model : db.Genre, attributes : ["name"]
            }],
            attributes : ["name", "duration"],
            distinct : true
        })

        return {
            tracks : rows,
            count
        }
    },

    create : async (track, artistId) => {
        const createdTrack = await db.Track.create(track)
        await createdTrack.addArtist(artistId)

        return createdTrack
    },

    getOneById : async (id) => {
        const oneTrack = await db.Track.findByPk(id, {
            include : ["genre"],
            attributes : ["id", "name"]
        })

        return oneTrack
    }
}


module.exports = trackService