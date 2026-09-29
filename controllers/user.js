import { UserCollection } from "../models/User.js";

//Ajout d'un utilisateur
export const AddUser = async (req, res) => {
    try {
        const { email, nom, password } = req.body

        if(!email || email === "") return res.json({message:"l'email est requis"});

        //On verifie d'abord que l'email n'existe pas dans la db
        const userEmail = await UserCollection.findOne({ email })
        if(userEmail) return res.json({ message : "Email non disponible"});

        //On l'ajoute
        const data = new UserCollection({ email, nom, password})
        const user = await data.save()

        return res.json({message: "Enregistrement effectuée"})

    } catch (error) {
        console.log(error)
        return res.json({message: "Une erreur s'est produite."})
    }
}

//Liste des utilisateurs
export const GetUser = async (req, res) => {
    try {

        //On verifie d'abord que l'email n'existe pas dans la db
        const user = await UserCollection.find({})

        return res.json({message: "Liste des Utilisateurs", user})

    } catch (error) {
        console.log(error)
        return res.json({message: "Une erreur s'est produite."})
    }
}

//modifier un utilisateur
export const UpdUser = async (req, res) => {
    
    try {
    const { iduser } = req.params
        const { email, nom, password } = req.body
        
        //Methode mongoose
        const OneUser = await UserCollection.findById(iduser)

        if(!OneUser) return res.status(404).json({ message: "Cet Utilisateur n'existe pas" });

        if(!email || email.trim() === "") return res.status(400).json({ message: "l'email est requis" });

        //On verifie d'abord que l'email n'existe pas dans la db
        /*const userEmail = await UserCollection.findOne({ email })
        if(userEmail) return res.json({ message : "Email non disponible"});*/

        const upduser = await UserCollection.findByIdAndUpdate(iduser,{ email, nom, password })
        return res.json({ message: "Modification effectuée"})

} 
catch (error) {
    // Cela vous affichera l'erreur précise dans votre terminal Nodemon si un autre problème survient
    console.error("Erreur UpdUser :", error); 
    return res.status(500).json({ message: "Une erreur s'est produite.", error: error.message });
}

}

//supprimer un utilisateur
export const SupUser = async (req, res) => {
    try {
       
        const { iduser } = req.params
        
        //Methode mongoose
        const OneUser = await UserCollection.findById(iduser)

        if(!OneUser) return res.status(404).json({ message: "Cet Utilisateur n'existe pas" });

        const supuser = await UserCollection.findByIdAndDelete(iduser)
        return res.json({ message: "Suppression effectuée"})

    } catch (error) {
         console.log(error)
        return res.json({message: "Une erreur s'est produite."})
    }

}