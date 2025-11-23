import mongoose from "mongoose";
import bcrypt from "bcrypt"

const UserSchmema = new mongoose.Schema(
    {
        name: String,
        email: String,
        password: String,
        avatar: String
    },
    { timestamps: true }
);

UserSchmema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

export default User =
    mongoose.models.User || mongoose.model("User", UserSchmema)