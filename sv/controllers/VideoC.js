import { createError } from "../config/error.js"
import UserM from "../models/UserM.js"
import Video from "../models/VideoM.js"


export const addVideo = async(req,res,next)=>{
    const addVideo = new Video({userId:req.user.id,...req.body})
    try {
        const saveVideo = await addVideo.save()
        res.status(200).json(saveVideo)
    } catch (err) {
        next(err)
    }
}


export const updateVideo = async(req,res,next)=>{
    try {
        const video = await Video.findById(req.params.id)
        if(video){
            if (req.user.id === video.userId) {
              const updatedVideo = await Video.findByIdAndUpdate(
                req.params.id,
                {
                  $set: req.body,
                },
                {
                  new: true,
                }
                );
                res.status(200).json(updatedVideo);
            } else {
              return next(createError(403, "You can only Update your video"));
            }
        }else{
            return next(createError(404, "Video not found"));
        }
    } catch (err) {
      next(err);
    }
}


export const deleteVideo = async(req,res,next)=>{
    try {
        const video = await Video.findById(req.params.id);
        if (video) {
          if (req.user.id === video.userId) {
            const deleteVideo = await Video.findByIdAndDelete(
              req.params.id,
            );
            res.status(200).json("The video has been deleted");
          } else {
            return createError(403, "You can only Delete your video");
          }
        } else {
          return createError(404, "Video not found");
        }
    } catch (err) {
      next(err);
    }
}


export const getVideo  = async(req,res,next)=>{
    try {
      const video = await Video.findById(req.params.id)
      res.status(200).json(video)
    } catch (err) {
      next(err);
    }
}


export const addView  = async(req,res,next)=>{
    try {
      await Video.findByIdAndUpdate(req.params.id,{
        $inc:{views:1}
      },{new:true})
      res.status(200).json("The views has been increase")
    } catch (err) {
      next(err);
    }
}


export const trend  = async(req,res,next)=>{
    try {
      const videos = await Video.find().sort({ views: -1 });
      res.status(200).json(videos)
    } catch (err) {
      next(err);
    }
}


export const random  = async(req,res,next)=>{
    try {
      const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
      res.status(200).json(videos);
    } catch (err) {
      next(err);
    }
}


export const sub  = async(req,res,next)=>{
    try {
      const user = await UserM.findById(req.user.id);
      const subsCribedChannel = user.subscribeUser;
      console.log(subsCribedChannel)
      const list =await Promise.all(
        subsCribedChannel.map((channelId)=>{
          return Video.find({userId:channelId})
        })
      )
      res.status(200).json(list.flat().sort((a,b)=>b.createdAt - a.createdAt))

    } catch (err) {
      next(err);
    }
}


export const tags  = async(req,res,next)=>{
  const tags = req.query.tags.split(",");

    try {
      const videos = await Video.find({ tags: { $in: tags } }).limit(20);
      res.status(200).json(videos)
    } catch (err) {
      next(err)
    }
}


export const search  = async(req,res,next)=>{
  const query = req.query.q
    try {
      const videos = await Video.find({title:{$regex:query, $options:"i" }}).limit(40)
      res.status(200).json(videos)

    } catch (err) {
      next(err);
    }
}