import {app} from "../backend/app.js";
import dotenv from "dotenv";
import {connectDatabase} from "./database.js"
import cloudinary from "cloudinary"

dotenv.config({path:"../backend/config.env"})

connectDatabase()

cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME ,
  api_key:process.env.CLOUDINARY_API_KEY ,
  api_secret:process.env.CLOUDINARY_API_SECRET
});

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})