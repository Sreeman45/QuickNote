import express from 'express';
import mongoose from 'mongoose';
import userRouter from './router/userroutes.js';
import cookieParser from 'cookie-parser';
import { authenticate } from './controller/authenticate.js';
import dataRouter from './router/dataroutes.js';
import cors from 'cors';
const app=express();
app.use(cookieParser())
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173',
}))
mongoose.connect('mongodb://localhost:27017/Notes').then(()=>console.log("mongoDB connected"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(authenticate)
app.use('/users',userRouter)
app.use('/data',dataRouter)
app.listen(3000,()=>{
    console.log(`running...`)
})