import mongoose, { mongo } from "mongoose"

export const DBconnection = async (req, res, next) => {
    //next permet d'autorisé ou de bloquer une requête
    try {
        
        //On verifie d'abord si la db est déjà connecté
        if(mongoose.connection.readyState === 1) {
            console.log("db déjà connecté")
            return next()
        }

        //On ouvre la db
        await mongoose.connect(process.env.db_url, {
            dbName:"checkpointAPI"
        })

        console.log('Db bien connectée')

        return next()

    } catch (error) {
        console.log(error)
        return res.json({message: "Erreur de connexion au serveur"})
    }
}