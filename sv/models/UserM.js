import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String
    },
    img: {
      type: String,
      default:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribeUser: {
      type: [String],
    },
    fromGoogle:{
      type:Boolean,
      default:false
    }
  },
  {
    timestamps: true,
  }
);


export default mongoose.model("User",UserSchema)