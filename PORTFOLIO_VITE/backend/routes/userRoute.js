import express from "express";
import { User } from "../models/userModel.js";
import jsonwebtoken from 'jsonwebtoken';


const router = express.Router();

router.post("/login", async (req, res)=>{
    try {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password
        })
        if (user){
            let token = jsonwebtoken.sign({id: user._id}, process.env.SECRET_KEY);
            res.status(200).send({
                data: user,
                token: token,
                success: true,
                message: "Login Successfully"
            });
        } else {
            res.status(200).send({
                data: user,
                success: false,
                message: "Invalid username or password "
            });
        }
    } catch (error) {
        res.status(500).send(error)
    }
})


export const userRouter = router;