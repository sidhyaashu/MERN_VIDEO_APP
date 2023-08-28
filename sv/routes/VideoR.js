import express from 'express'
import { verifyToken } from '../config/verifyToken.js'
import { 
    addVideo, 
    addView, 
    deleteVideo, 
    getVideo, 
    random, 
    search, 
    sub, 
    tags, 
    trend, 
    updateVideo 
} from '../controllers/VideoC.js'

const router = express.Router()


router.post("/",verifyToken,addVideo)
router.put("/:id",verifyToken,updateVideo)
router.delete("/:id",verifyToken,deleteVideo)
router.get("/find/:id",getVideo)
router.put("/view/:id",addView)
router.get("/trend",trend)
router.get("/random",random)
router.get("/sub", verifyToken,sub);
router.get("/tags",tags);
router.get("/search",search);




export default router