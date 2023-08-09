import express from 'express'
import { signIn, signUp } from '../controllers/AuthC.js'

const router = express.Router()

//CREATE USER
router.post("/signup",signUp)

//LOGIN USER
router.post("/signin",signIn)


//GOOGLE AUTH
// router.post("/google",)




export default router