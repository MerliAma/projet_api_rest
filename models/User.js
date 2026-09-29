import { model, Schema } from "mongoose"

const UserSchema = new Schema({
    nom: { type: String},
    email: { type: String, unique: true},
    password: { type: String}
})

export const UserCollection = model.User || model("User", UserSchema)