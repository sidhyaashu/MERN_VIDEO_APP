import express from 'express'
import { verifyToken } from './../config/verifyToken.js';
import { addComment, deleteComment, getComment } from '../controllers/CommentsC.js';

const router = express.Router()


router.post("/",verifyToken,addComment)
router.delete("/:id",verifyToken,deleteComment)
router.get("/:videoId",verifyToken,getComment)



export default router