import express from "express";
import { AddUser, GetUser, SupUser, UpdUser } from "./controllers/user.js";

const routes = express.Router()

//Les routes

//utilisateurs - les controlleurs (fonctions) sont dans controllers/user.js
routes.post("/add-user", AddUser)
routes.get("/get-all", GetUser)
routes.put("/update-user/:iduser", UpdUser)
routes.delete("/delete-user/:iduser", SupUser)


export default routes