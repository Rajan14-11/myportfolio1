import express from "express";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/User.js";
import path from "path";
import cors from "cors"

export const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({extended:true,limit:'50mb'}))

app.use("/api/v1",userRouter)

