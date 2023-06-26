import express from 'express'
import { signUp } from '../controllers/AuthC.js'

const router = express.Router()

//CREATE USER
router.post("/signup",signUp)

//LOGIN USER
// router.post("/signin",)


//GOOGLE AUTH
// router.post("/google",)




export default router