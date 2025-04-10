import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
})
export const UserModel = mongoose.Model("user", userSchema)