import mongoose from "mongoose";
import User from '../models/UserM.js'
import bcrypt from 'bcryptjs'
import { createError } from "../config/error.js";
import jwt from 'jsonwebtoken'

export const signUp = async(req,res,next)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10)
        const newUser = new User({...req.body,password:hashedPassword})
        await newUser.save()
        res.status(200).send("New user created")
    } catch (error) {
        next(createError(error))
    }
}


export const signIn = async(req,res,next)=>{
    try {
        const user = await User.findOne({name:req.body.name})
        if(!user) {
            return next(createError(404,"User not found...!"))
        }

        const isCorrect = await bcrypt.compare(req.body.password,user.password)

        if(!isCorrect){
            return next(createError(404,"Wrong creadentials"))
        }

        const token = jwt.sign({id:user._id},process.env.JWT)
        const { password,...others } = user._doc



        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(others)

    } catch (error) {
        next(createError(error))
    }
}
