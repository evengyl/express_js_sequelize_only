const artistService = require("../services/artist.service")

const artistController = {

    getAll : async (req, res, next) => {
        let allArtist = await artistService.getAll()       
        
        res.json(allArtist)
    },

    getOneById : async (req, res, next) => {
        let id = req.params.id
        let oneArtist = await artistService.getOneById(id)
        
        res.json(oneArtist)
    },

    add : async (req, res, next) => {
        let createArtist = req.body
        let artistCreated = await artistService.add(createArtist)
        
        res.json(artistCreated)
    },

    update : async (req, res, next) => {
        let id = req.params.id
        let upArtist = req.body
        let updatedArtist = await artistService.update(id, upArtist)
        
        res.json(updatedArtist)
    },

    delete : async (req, res, next) => {
        let id = req.params.id
        let deletedArtist = await artistService.delete(id)
        
        res.json(deletedArtist)
    }
}


module.exports = artistController

