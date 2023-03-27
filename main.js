require("dotenv").config()
const port = process.env.PORT


const express = require("express")
const app = express()
app.use(express.json())


const db = require("./models/index")
//initialisation de sequelize
db.sequelize.authenticate()
.then(() => { console.log("Connection DB OK") }) //ok connecté a mssql par le biai de tedious
.catch((error) => { console.log("Erreur de Connection DB", error)})

//sync db
//db.sequelize.sync({alter:true, force:true})

const router = require("./routers/router")
app.use("/api", router)


app.use((error, req, res, next) => {
    console.log(error)
    res.status(500).json(error)
})


app.listen(port, console.log("server ok"))

