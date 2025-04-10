import { UserModel } from "../Models/UserSchema";

export const Signup = (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.send(204)
    }
}