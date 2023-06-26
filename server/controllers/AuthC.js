import mongoose from "mongoose";
import User from '../models/UserM.js'
import bcrypt from 'bcryptjs'

export const signUp = async(req,res,next)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const newUser = new User({...req.body,password:hashedPassword})
        await newUser.save()
        res.status(200).send("New user created")
    } catch (error) {
        next(error)
    }
}
