import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import userRoute from './routes/UserR.js'
import videoRoute from './routes/VideoR.js'
import commentRoute from './routes/CommentsR.js'
import authRoute from './routes/AuthR.js'
import morgan from 'morgan'
import cookieParser from 'cookie-parser';



dotenv.config()


const app = express()
const DB = process.env.MONGO_URL
const PORT = 4000 || 3000

app.use(cookieParser())
app.use(express.json())
app.use(morgan("tiny"))


app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/videos",videoRoute)
app.use("/api/comments",commentRoute)

// process.on("warning", (e) => console.warn(e.stack));

app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wron!";
    return res.status(status).json({
        success:false,
        status:status,
        message:message
    })
})



const connect =()=>{
    mongoose.connect(DB).then(()=>{
        console.log("Connected DB")
    }).catch((err)=>{
        throw err
    })
}

app.listen(PORT, () => {
  connect();
  console.log(`SERVER CONNECTED TO ${PORT}`);
});