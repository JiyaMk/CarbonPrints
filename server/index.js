const express = require("express");
const cors = require("cors");
const { RegisterUser } = require("./mongo");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors()); 

const bcrypt = require("bcrypt");
const port = 3001;

app.get("/login", cors(), (req, res) => {});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await RegisterUser.findOne({ email});
        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                return res.status(201).json({ msg: "Login successful" ,
                name: user.userName,
                email: user.email,});
            } else {
                return res.status(401).json({ msg: "Incorrect password" });
            }
        } else {
            res.status(401).json({ msg: "User not found" });
        }
    } catch (e) {
        res.json("fail");
    }
});

app.post("/register", async (req, res) => {
    const {userName,email,password,passwordConfirm} = req.body;
    console.log("Request Body:", req.body);
    try{
        if (!userName || !email || !password || !passwordConfirm) {
            return res.status(400).json({ msg: "All fields are required" });
        }
        if (password !== passwordConfirm) {
            return res.status(400).json({ msg: "Passwords do not match" });
        }
        const userExists = await RegisterUser.findOne({ email });
        if (userExists) {
            return res.status(400).json({ msg: "User already exists" });
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await RegisterUser.create({
            userName: userName,
            email: email,
            password: hashedPassword,
            passwordConfirm: hashedPassword,
        });
        return res.status(201).json({ msg: "User registered successfully" });
    }catch (e) {
        res.json("fail");
    }
});

app.listen(port, () => {
    console.log(`Server connected at port ${port}`);
});
