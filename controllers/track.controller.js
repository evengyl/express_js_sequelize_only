const trackService = require("../services/track.service")

const trackController = {

    getAll : async (req, res, next) => {
        let allTrack = await trackService.getAll()    
        res.json(allTrack)
    },

    getOneById : async (req, res, next) => {
        let id = req.params.id
        let oneTrack = await trackService.getOneById(id)

        if(!oneTrack){
            res.status(404).json({ error : "track not found"})
            return
        }
        res.json(oneTrack)
    },

    create : async (req, res, next) => {
        let artistId = req.params.artistId
        let newTrack = req.body

        let createdTrack = await trackService.create(newTrack, artistId)
        console.log(createdTrack)

        res.json(createdTrack)
    }
}


module.exports = trackController

