import { createError } from "../config/error.js";
import CommentsM from "../models/CommentsM.js";
import VideoM from "../models/VideoM.js"

export const addComment = async (req,res,next)=>{
    const newComment = new CommentsM({ ...req.body, userId: req.user.id });
    try {
        const saveComment = await newComment.save()
        res.status(200).send(saveComment)
    } catch (error) {
        next(error)
    }

}


export const deleteComment = async (req,res,next)=>{
    try {
        const comment = await CommentsM.findById(req.params.id);
        const video = await VideoM.findById(req.params.id);
        if (req.user.id === comment.userId || req.user.id === video.userId) {
            await CommentsM.findByIdAndDelete(req.params.id)
            res.status(200).json("The comment has been deleted")
        }else{
            return next(createError(403,"You can only delete your comment"))
        }
    } catch (error) {
        next(error)
    }

}


export const getComment = async (req, res, next) => {
    try {
        const comments = await CommentsM.find({videoId:req.params.videoId})
        res.status(200).json(comments)
    } catch (error) {
        next(error)
    }
};