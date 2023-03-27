const router = require("express").Router()

const routerTrack = require("./track.router")
const routerArtist = require("./artist.router")
const routerGenre = require("./genre.router")

router.use("/tracks", routerTrack)
router.use("/artists", routerArtist)
router.use("/genres", routerGenre)

module.exports = router