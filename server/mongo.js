const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Carbon_footprint").then(()=> console.log("MongoDB connected")).catch((err)=> console.log("Mongo Error",err));
const registerSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    passwordConfirm: {
        type: String,
        required: true
    }
});

const RegisterUser = mongoose.model("RegisterUser", registerSchema);

module.exports = { RegisterUser};
