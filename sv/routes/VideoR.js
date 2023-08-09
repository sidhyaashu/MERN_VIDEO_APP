import express from 'express'
import { verifyToken } from '../config/verifyToken.js'
import { addVideo, deleteVideo, getVideo, updateVideo } from '../controllers/VideoC.js'

const router = express.Router()


router.post("/",verifyToken,addVideo)
router.put("/",verifyToken,updateVideo)
router.delete("/",verifyToken,deleteVideo)
router.get("/",verifyToken,getVideo)




export default router