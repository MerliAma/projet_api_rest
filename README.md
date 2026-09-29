## Instructions
Démarrez un nouveau projet Node JS avec ' npm init '
Installez Mongoose, Express et le fichier .env.
Configurez les variables d'environnement avec .env
Lancez un serveur avec Express dans le fichier server.js
Connectez votre base de données localement ou avec Mongo Atlas.
La structure des dossiers devrait être la suivante :
config/ .env 

Server.js

     7. Créez un dossier « models » et un fichier User.js à l'intérieur. 

     8. Dans User.js, vous devez définir un schéma Mongoose et exporter le modèle ; vous l’utiliserez dans server.js.

     9. La structure des dossiers doit être la suivante : 

config/ .env 

modèles/User.js

Server.js

     10. Dans le fichier server.js, créez quatre routes : 

       OBTENIR : RETOURNER TOUS LES UTILISATEURS 

       POSTER : AJOUTER UN NOUVEL UTILISATEUR À LA BASE DE DONNÉES 

       PUT : MODIFIER UN UTILISATEUR PAR ID 

       SUPPRIMER : Supprimer un utilisateur par son identifiant 

Remarque : dans chaque fonction de rappel, vous utiliserez les méthodes Mongoose pour manipuler vos données et les renvoyer dans la réponse. 

     11. Utilisez Postman pour tester chaque itinéraire.

                 

  Liens utiles : 

.env : https://www.npmjs.com/package/dotenv
Express.js : https://expressjs.com/
Req.params && req.query : https://coursework.vschool.io/express-params-and-query/
Mongoose : https://mongoosejs.com/
API REST : https://www.youtube.com/watch?v=SLwpqD8n3d0

