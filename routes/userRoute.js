const express = require("express");
const UserModel = require("../model/UserModel");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const data = await UserModel.findOne({ email });
        if (data) {
            res.json("User already registered")
        }
        else {
            const payload = req.body;
            const user = new UserModel(payload);
            await user.save();
            res.json("User registered successfully")
        }

    } catch (error) {
        res.json("couldn't register "+error)
    }
});

userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const data = await UserModel.findOne({ email });
        if (data) {
            if(password == data.password){
                res.json("Login successful")
            }
            else {
                res.json("Wrong password")
            }
        }
        else {
            res.json("Email not found please register first")
        }

    } catch (error) {
        res.json("couldn't register "+error)
    }
});



module.exports = userRouter;