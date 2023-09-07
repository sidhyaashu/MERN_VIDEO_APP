import { createError } from "../config/error.js";
import UserM from "../models/UserM.js";
import VideoM from "../models/VideoM.js";

export const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await UserM.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You can only update your account"));
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await UserM.findByIdAndDelete(req.params.id);
      res.status(200).json("User Has been deleted");
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "You can only delete your account"));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await UserM.findById(req.params.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(400).json("User not found");
    }
  } catch (error) {
    next(error);
  }
};

export const subscribeUser = async (req, res, next) => {
  try {
    await UserM.findByIdAndUpdate(
      req.user.id,
      {
        $push: { subscribeUser: req.params.id },
      },
      { new: true }
    );
    await UserM.findByIdAndUpdate(
      req.params.id,
      {
        $inc: { subscribers: 1 },
      },
      { new: true }
    );
    res.status(200).json("Subscribed");
  } catch (error) {
    next(error);
  }
};

export const unsubscribeUser = async (req, res, next) => {
  try {
    await UserM.findByIdAndUpdate(
      req.user.id,
      {
        $pull: { subscribeUser: req.params.id },
      },
      { new: true }
    );
    await UserM.findByIdAndUpdate(
      req.params.id,
      {
        $inc: { subscribers: -1 },
      },
      { new: true }
    );
    res.status(200).json("Unsubscribed");
  } catch (error) {
    next(error);
  }
};

export const like = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    const respns = await VideoM.findByIdAndUpdate(
      videoId,
      {
        $addToSet: { likes: id },
        $pull: { dislikes: id },
      },
      { new: true }
    );
    if (respns) {
      res.status(200).json("The video has been liked");
    } else {
      return next(createError(403, "Something wron"));
    }
  } catch (error) {
    next(error);
  }
};

export const dislike = async (req, res, next) => {
  const id = req.user.id;
  const videoId = req.params.videoId;
  try {
    const respns = await VideoM.findByIdAndUpdate(
      videoId,
      {
        $addToSet: { dislikes: id },
        $pull: { likes: id },
      },
      { new: true }
    );
    if (respns) {
      res.status(200).json("The video has been disliked");
    } else {
      return next(createError(403, "Something wron"));
    }
  } catch (error) {
    next(error);
  }
};