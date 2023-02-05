import mongoose from "mongoose";

const userLog = mongoose.Schema({
    username: String,
    email: String,
    password: String,
}) 


const fotorUser = mongoose.model("fotorUser", userLog);
export default fotorUser;