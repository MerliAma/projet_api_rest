import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes.js"
import { DBconnection } from "./db/connexion.js"

dotenv.config() //On autorise les variables d'environnement

const app = express()

//On ouvre la db
app.use(DBconnection)

//Les middlewares 
app.use(express.json())  //pr le format json

//On autorise le frontend
app.use(cors())

//Les routes api
app.use("/api", routes)  //voir fichier routes.js

app.get("/", (req, res) => {
    return res.send("Bienvenue sur notre API")
})

app.listen(3005, () => console.log("Serveur demarrer sur 3005"))